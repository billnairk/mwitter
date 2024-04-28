interface MwitProps {
  postNumber?: number;
}

const Mwit: React.FC<MwitProps> = ({ postNumber }) => {
  return (
    <div className=" border-[1px] w-full rounded-md border-slate-400 flex shadow-lg mb-10">
      <div className="w-16 h-16 rounded-full bg-red-300 m-3"></div>
      <div className="border-l-[1px] border-slate-400 p-3 flex items-center">
        개발자로 취뽀하기 {postNumber}
      </div>
    </div>
  );
};

export default Mwit;
