import { useMoralis } from "react-moralis";
import React, { useState } from "react";

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log("Error:", error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 rounded-full border-4 border-blue-400 max-w-2xl shadow-xl">
      <input
        type="text"
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        placeholder={`Enter a Message ${user.getUsername()}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="font-bold text-pink-500"
        type="submit"
        onClick={sendMessage}
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
