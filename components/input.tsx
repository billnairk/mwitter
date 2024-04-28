interface InputProps {
  type: string;
}

export default function Input({ type }: InputProps) {
  return (
    <>
      {type === "id" ? (
        <input
          placeholder="ID"
          className="border-[1px] border-slate-300 w-full h-[50px] rounded-lg mb-4 pl-4"
        />
      ) : type === "password" ? (
        <input
          placeholder="PASSWORD"
          type="password"
          className="border-[1px] border-slate-300 w-full h-[50px] rounded-lg mb-4 pl-4"
        />
      ) : null}
    </>
  );
}
