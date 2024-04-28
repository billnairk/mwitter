interface MwitFavProps {
  postNumber?: number;
}

const MwitFav: React.FC<MwitFavProps> = ({ postNumber }) => {
  return (
    <div className=" border-[1px] w-full rounded-md border-slate-400 flex shadow-lg mb-10">
      <div className="w-16 h-16 rounded-full bg-indigo-400 m-3"></div>
      <div className="border-l-[1px] border-slate-400 p-3 flex items-center">
        즐찾 {postNumber}
      </div>
    </div>
  );
};

export default MwitFav;
