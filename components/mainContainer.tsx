import { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[500px] shadow-md min-h-screen max-h-auto">
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
