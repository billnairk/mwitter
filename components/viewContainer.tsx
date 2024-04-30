import { useForm } from "react-hook-form";
import Button from "./button";
import Input from "./input";
import Mwit from "./mwit";
import MwitFav from "./mwitFav";
import MwitPost from "./mwitPost";
import useMutation from "../lib/client/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface ViewContainerProps {
  type: string;
}

interface LoginForm {
  id: string;
  password: string;
}

const ViewContainer: React.FC<ViewContainerProps> = ({ type }) => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const router = useRouter();
  const [
    registerFn,
    { loading: registerLoading, data: registerData, error: registerError },
  ] = useMutation("/api/users/register");
  const [
    loginFn,
    { loading: loginLoading, data: loginData, error: loginError },
  ] = useMutation("/api/users/login");
  const onValidLogin = (loginFormData: any) => {
    localStorage.setItem("username", loginFormData.id);
    loginFn(loginFormData);
  };
  const onValidRegister = (registerData: any) => {
    registerFn(registerData);
  };
  useEffect(() => {
    if (loginData?.ok) {
      router.push("/");
    }
    if (registerData?.ok) {
      router.push("/login");
    }
  }, [loginData, router, registerData]);
  return (
    <div className="p-4 mt-4 flex-grow">
      {type === "mwitPostListBoard" ? (
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
            return <Mwit key={i} postNumber={i} />;
          })}
        </div>
      ) : null}
      {type === "mwitPostBoard" ? (
        <div>
          <MwitPost />
        </div>
      ) : null}
      {type === "mwitFavBoard" ? (
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
            return <MwitFav key={i} postNumber={i} />;
          })}
        </div>
      ) : null}
      {type === "mwitLoginBoard" ? (
        <form onSubmit={handleSubmit(onValidLogin)}>
          <Input register={register("id", { required: true })} type="id" />
          <Input
            register={register("password", { required: true })}
            type="password"
          />
          <Button type="loginFormButton" />
        </form>
      ) : null}
      {type === "mwitRegisterBoard" ? (
        <form onSubmit={handleSubmit(onValidRegister)}>
          <Input register={register("id", { required: true })} type="id" />
          <Input
            register={register("password", { required: true })}
            type="password"
          />
          <Button type="registerFormButton" />
        </form>
      ) : null}
      {type === "mwitWriteBoard" ? (
        <div>
          <textarea
            rows={20}
            cols={10}
            className="w-full border-[1px] border-slate-300 rounded-md mb-4 p-2"
            placeholder="Write.."
          />
          <Button type="writeFormButton" />
        </div>
      ) : null}
    </div>
  );
};

export default ViewContainer;
