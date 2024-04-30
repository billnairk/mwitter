import { useRouter } from "next/router";

interface ButtonProps {
  type: string;
}

export default function Button({ type }: ButtonProps) {
  const router = useRouter();
  const onClick = () => {
    router.push("/register");
  };
  return (
    <>
      {type === "loginFormButton" ? (
        <>
          <button className="w-full bg-[#37A59E] p-2 rounded-md text-white font-black text-[24px] mb-4">
            Login
          </button>
          <button
            onClick={onClick}
            className="w-full bg-[#37A59E] p-2 rounded-md text-white font-black text-[24px]"
          >
            Sign Up
          </button>
        </>
      ) : type === "registerFormButton" ? (
        <button className="w-full bg-[#37A59E] p-2 rounded-md text-white font-black text-[24px]">
          Register
        </button>
      ) : type === "writeFormButton" ? (
        <button className="w-full bg-[#37A59E] p-2 rounded-md text-white font-black text-[24px]">
          Submit
        </button>
      ) : null}
    </>
  );
}
