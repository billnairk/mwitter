const MwitPost = () => {
  return (
    <div className="flex flex-col items-center p-4 mt-4 flex-grow">
      <div className="rounded-lg w-full h-[550px] border-[1px] shadow-md border-slate-300">
        <div className="flex">
          <div className="w-14 h-14 rounded-full bg-yellow-200 m-3"></div>
          <div className="flex flex-col justify-center">
            <div className="font-bold text-slate-600">2024/09/01</div>
            <div className="text-slate-300 text-xs">00:00 am</div>
          </div>
        </div>
        <div className="p-4">Text..</div>
      </div>
      <button className="mt-10 rounded-full w-[100px] h-[100px] bg-blue-500 text-white font-black text-2xl">
        Like
      </button>
    </div>
  );
};

export default MwitPost;
