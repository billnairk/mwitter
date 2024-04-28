import Button from "./button";
import Input from "./input";
import Mwit from "./mwit";
import MwitFav from "./mwitFav";
import MwitPost from "./mwitPost";

interface ViewContainerProps {
  type: string;
}

const ViewContainer: React.FC<ViewContainerProps> = ({ type }) => {
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
        <div className="">
          <Input type="id" />
          <Input type="password" />
          <Button type="loginFormButton" />
        </div>
      ) : null}
      {type === "mwitRegisterBoard" ? (
        <div>
          <Input type="id" />
          <Input type="password" />
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
          <Button type="registerFormButton" />
        </div>
      ) : null}
    </div>
  );
};

export default ViewContainer;
