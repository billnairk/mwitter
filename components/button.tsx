interface ButtonProps {
  type: string;
}

export default function Button({ type }: ButtonProps) {
  return (
    <>
      {type === "loginFormButton" ? (
        <button className="w-full bg-[#37A59E] p-2 rounded-md text-white font-black text-[24px]">
          Login
        </button>
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
