// import React from 'react'
import img from "../assets/dices 1.png";
function Start({ game }) {
  return (
    <>
      <div className="flex justify-center items-center m-0 mt-[100px] ">
        <div className="max-w-[649px] max-h-[522px]">
          <img src={img}></img>
        </div>
        <div>
          <h1 className="font-bold text-8xl w-[528px] ">DICE GAME</h1>
          <button
            className=" float-end  bg-slate-900 p-3
     mt-4 text-white w-[220px] h-[44px]"
            onClick={game}
          >
            Play Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Start;
