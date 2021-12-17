import { useMoralis } from "react-moralis";

const ChangeUserName = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = (e) => {
    e.preventDefault();
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({ username });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        className="hover:text-pink-700"
        disable={isUserUpdating}
        onClick={setUsername}
      >
        Change Username
      </button>
    </div>
  );
};

export default ChangeUserName;
