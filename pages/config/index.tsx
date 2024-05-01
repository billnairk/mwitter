import Button from "../../components/button";
import MainContainer from "../../components/mainContainer";
import TopNav from "../../components/topNav";
import Link from "next/link";

export default function Configuration() {
  return (
    <>
      <MainContainer>
        <TopNav pageCheck={true} />
        <div className="flex-grow flex flex-col p-4">
          <Link href="/">
            <a>
              <Button type="text">Home</Button>
            </a>
          </Link>
          <Link href="/fav">
            <a>
              <Button type="text">Favorite</Button>
            </a>
          </Link>
          <Link href="/write">
            <a>
              <Button type="text">Write</Button>
            </a>
          </Link>
          <Button type="text">Logout</Button>
        </div>
      </MainContainer>
    </>
  );
}
