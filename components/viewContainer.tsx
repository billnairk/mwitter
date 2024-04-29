import { useForm } from "react-hook-form";
import Button from "./button";
import Input from "./input";
import Mwit from "./mwit";
import MwitFav from "./mwitFav";
import MwitPost from "./mwitPost";
import useMutation from "../lib/client/useMutation";

interface ViewContainerProps {
  type: string;
}

interface LoginForm {
  id: string;
  password: string;
}

interface MutationType {
  fn: true;
}

const ViewContainer: React.FC<ViewContainerProps> = ({ type }) => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const [registerFn, { loading, data, error }] = useMutation(
    "/api/users/register"
  );
  const onValid = (LoginFormData: any) => {
    console.log(loading, data, error);
    registerFn(LoginFormData);
  };
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
        <form onSubmit={handleSubmit(onValid)}>
          <Input register={register("id", { required: true })} type="id" />
          <Input
            register={register("password", { required: true })}
            type="password"
          />
          <Button type="loginFormButton" />
        </form>
      ) : null}
      {type === "mwitRegisterBoard" ? (
        <div>
          <Input register={register("id", { required: true })} type="id" />
          <Input
            register={register("password", { required: true })}
            type="password"
          />
          <Button type="registerFormButton" />
        </div>
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
