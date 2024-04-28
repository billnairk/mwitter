import TopNav from "../../components/topNav";
import MainContainer from "../../components/mainContainer";
import ViewContainer from "../../components/viewContainer";

export default function Login() {
  return (
    <>
      <MainContainer>
        <TopNav />
        <ViewContainer type="mwitPostBoard" />
      </MainContainer>
    </>
  );
}
