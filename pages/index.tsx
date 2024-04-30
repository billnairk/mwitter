import React from "react";
import TopNav from "../components/topNav";
import MainContainer from "../components/mainContainer";
import ViewContainer from "../components/viewContainer";
import useUser from "../lib/client/useUser";
import useSWR, { useSWRConfig } from "swr";

export default function Home() {
  // const user = useUser();
  // console.log(user);
  return (
    <>
      <MainContainer>
        <TopNav />
        <ViewContainer type={"mwitPostListBoard"} />
      </MainContainer>
    </>
  );
}
