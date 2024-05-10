function Rolldisc({ CurrentDice, roledice, setscore, setrule, rule }) {
  const resetstore = () => {
    setscore(0);
  };

  return (
    <>
      <div className="flex  flex-col items-center cursor-pointer">
        <div onClick={roledice}>
          <img src={`src/assets/dice_${CurrentDice}.png  `} alt="dice1" />
        </div>
        <p className="">Click on Dice to roll</p>
        <button
          onClick={resetstore}
          className=" float-end  bg-slate-900 p-3
     mt-4 text-white w-[220px] h-[44px]"
        >
          RESET
        </button>
        <button
          className=" float-end 
     mt-4 text-red-600 w-[220px] h-[44px]"
          onClick={() => setrule((prev) => !prev)}
        >
          {" "}
          {rule ? "Hide" : "Show"} rules
        </button>
      </div>
    </>
  );
}

export default Rolldisc;
