import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser() {
  // useEffect(() => {
  //   const userName = localStorage.getItem("username");
  // }, []);
  let userName: any;
  const router = useRouter();
  if (typeof window !== "undefined") {
    userName = localStorage.getItem("username");
  }
  const { data, error } = useSWR(`/api/users/myinfo/${userName}`);
  useEffect(() => {
    if (userName === null) router.replace("/login");
    if (error) {
      console.log(error);
      return;
    }
  }, [data, error]);
  return data;
}
