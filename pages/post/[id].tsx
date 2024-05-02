import TopNav from "../../components/topNav";
import MainContainer from "../../components/mainContainer";
import ViewContainer from "../../components/viewContainer";
import MwitPost from "../../components/mwitPost";
import useMutation from "../../lib/client/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const { query } = useRouter();
  const [getPostFn, { loading, data, error }] = useMutation("/api/getpost");
  useEffect(() => {
    if (query.id) {
      getPostFn(query);
    }
  }, [query.id]);
  return (
    <>
      <MainContainer>
        <TopNav />
        <MwitPost />
      </MainContainer>
    </>
  );
}
