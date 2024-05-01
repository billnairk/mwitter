import MainContainer from "../../components/mainContainer";
import TopNav from "../../components/topNav";
import ViewContainer from "../../components/viewContainer";

export default function Configuration() {
  return (
    <>
      <MainContainer>
        <TopNav />
        <ViewContainer type="mwitConfigBoard" />
      </MainContainer>
    </>
  );
}
