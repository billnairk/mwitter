import { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[500px] h-screen m-4 shadow-md">{children}</div>
    </div>
  );
};

export default MainContainer;
