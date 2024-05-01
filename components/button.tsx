import { useRouter } from "next/router";
import { ReactNode } from "react";

interface ButtonProps {
  type: string;
  children: ReactNode;
}

export default function Button({ type, children }: ButtonProps) {
  const router = useRouter();
  const onClick = () => {
    router.push("/register");
  };
  return (
    <>
      {type === "text" && (
        <button className="w-full bg-[#37A59E] p-4 mb-4 rounded-md text-white font-black text-[24px] hover:cursor-pointer hover:bg-[#245854] ease-in duration-200">
          {children}
        </button>
      )}
      {type === "loginRegister" && (
        <button className="w-full bg-[#37A59E] p-3 mb-4 rounded-md text-white font-black text-[24px] hover:cursor-pointer hover:bg-[#245854] ease-in duration-200">
          {children}
        </button>
      )}
      {type === "or" && (
        <button className="w-auto bg-[#6b65d4] p-2 mb-4 rounded-md text-white font-black text-[24px] hover:cursor-pointer hover:bg-[#3e418b] ease-in duration-200">
          or {children}
        </button>
      )}
      {/* {type === "loginFormButton" ? (
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
      ) : null} */}
    </>
  );
}
