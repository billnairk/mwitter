import TopNav from "../../components/topNav";
import MainContainer from "../../components/mainContainer";
import ViewContainer from "../../components/viewContainer";

export default function Fav() {
  return (
    <>
      <MainContainer>
        <TopNav />
        <ViewContainer type="mwitFavBoard" />
      </MainContainer>
    </>
  );
}
