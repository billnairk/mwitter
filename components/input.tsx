import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  type: string;
  register: UseFormRegisterReturn;
}

export default function Input({ type, register }: InputProps) {
  return (
    <>
      {type === "id" ? (
        <input
          placeholder="ID"
          {...register}
          type="id"
          className="border-[1px] border-slate-300 w-full h-[50px] rounded-lg mb-4 pl-4"
        />
      ) : type === "password" ? (
        <input
          placeholder="PASSWORD"
          {...register}
          type="password"
          className="border-[1px] border-slate-300 w-full h-[50px] rounded-lg mb-4 pl-4"
        />
      ) : null}
    </>
  );
}
