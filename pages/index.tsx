import React from "react";
import TopNav from "../components/topNav";
import MainContainer from "../components/mainContainer";
import ViewContainer from "../components/viewContainer";

export default function Home() {
  return (
    <>
      <MainContainer>
        <TopNav />
        <ViewContainer type={"mwitPostListBoard"} />
      </MainContainer>
    </>
  );
}
