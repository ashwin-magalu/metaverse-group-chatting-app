import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1_T2cF_YroAa0qNxieTPXzKm6FG5BxmHmw&usqp=CAU"
          width={200}
          height={200}
          className="rounded-full object-cover"
        />
        <button
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
          onClick={authenticate}
        >
          Enter the Metaverse
        </button>
        <h3 className="text-red-500 bg-white bg-opacity-75 p-2 rounded-lg font-bold animate-bounce">
          Add Metamask extension to your browser and create account in it before
          trying to Logging In here
        </h3>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
