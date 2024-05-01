import { useRouter } from "next/router";

interface PageCheckType {
  pageCheck: boolean;
}

export default function TopNav({ pageCheck }: PageCheckType) {
  let user;
  if (typeof window !== "undefined") {
    user = localStorage.getItem("username");
  }
  const router = useRouter();
  const onClick = () => {
    router.push("/config");
  };
  return (
    <div className="w-full flex-grow shadow-md p-3 flex justify-between items-center">
      <div
        onClick={onClick}
        className="hover:cursor-pointer hover:bg-[#245854] ease-in duration-300 rounded-full w-14 h-14 flex flex-col justify-center text-center bg-[#37A59E]"
      >
        <p className="text-white font-black text-[32px]">M</p>
      </div>
      {user && pageCheck && (
        <div className="flex">
          <p className="font-black text-red-400">{user}</p>
          <p>님, 안녕하세요</p>
        </div>
      )}
    </div>
  );
}
