import React from "react";
import TopNav from "../components/topNav";
import MainContainer from "../components/mainContainer";
import ViewContainer from "../components/viewContainer";
import useUser from "../lib/client/useUser";

export default function Home() {
  const user = useUser();
  return (
    <>
      <MainContainer>
        <TopNav pageCheck={true} />
        <ViewContainer type={"mwitPostListBoard"} />
      </MainContainer>
    </>
  );
}
