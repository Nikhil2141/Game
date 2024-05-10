function Totalscore({ score }) {
  return (
    <>
      <div className="max-w-[200px] text-center">
        <h1 className=" text-[100px] font-semibold h-[125px]">{score}</h1>
        <p className="text-[24px] ">Total Score</p>
      </div>
    </>
  );
}

export default Totalscore;
