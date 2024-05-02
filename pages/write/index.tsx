import TopNav from "../../components/topNav";
import MainContainer from "../../components/mainContainer";
import Button from "../../components/button";
import { useForm } from "react-hook-form";
import useMutation from "../../lib/client/useMutation";
import { useEffect, useState } from "react";

interface WriteFormType {
  writeForm: string;
  rows: number;
  cols: number;
  placeholder: string;
  className: string;
}

export default function Write() {
  const { register, handleSubmit } = useForm<WriteFormType>();
  let getUserName: string | null = "";
  if (typeof window !== "undefined") {
    getUserName = localStorage.getItem("username");
  }
  const [userName, setUserName] = useState("");
  const [postFn] = useMutation("/api/uploadpost");
  const submitWrite = (postData: any) => {
    if (userName) postFn({ ...postData, userName });
  };
  useEffect(() => {
    if (getUserName) {
      setUserName(getUserName);
    }
  }, [getUserName]);
  return (
    <>
      <MainContainer>
        <TopNav />
        <form
          onSubmit={handleSubmit(submitWrite)}
          className="p-4 mt-4 flex-grow"
        >
          <textarea
            {...register("writeForm", { required: "글을 입력하세요" })}
            rows={20}
            cols={10}
            className="w-full border-[1px] border-slate-300 rounded-md mb-4 p-2"
            placeholder="Write.."
          />
          <Button type="text">Write</Button>
        </form>
      </MainContainer>
    </>
  );
}
