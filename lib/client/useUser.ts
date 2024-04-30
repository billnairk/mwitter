import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

interface userIdType {
  id: number | undefined;
}

export default function useUser(id?: 1) {
  id = 1;
  const { data, error } = useSWR("/api/users/myinfo");
  // console.log(data?.myProfile);
  useEffect(() => {
    // console.log(data?.myProfile);
  }, [data]);
  return data;
}
