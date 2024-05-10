import Numberselector from "./Numberselector";
import Rolldisc from "./Rolldisc";
import Rules from "./Rules";
import Totalscore from "./Totalscore";
import { useState } from "react";

function Gameplay() {
  const [score, setscore] = useState(0);
  const [select, setSelect] = useState();
  const [CurrentDice, SetCurrentDice] = useState(1);
  const [error, seterror] = useState();
  const [rule, setrule] = useState(false);

  const Randomnum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const roledice = () => {
    if (!select) {
      seterror("YOU HAVE NOT SELECTED ANY NUMBER");
      return;
    }
    seterror("");
    const dice = Randomnum(1, 6);
    SetCurrentDice((prev) => dice);

    if (select === dice) {
      setscore((prev) => prev + dice);
    } else {
      setscore((prev) => prev - 2);
    }
    setSelect(undefined);
  };
  return (
    <>
      <div className="flex justify-evenly">
        <Totalscore score={score} />
        <Numberselector
          error={error}
          seterror={seterror}
          select={select}
          setSelect={setSelect}
        />
      </div>
      <Rolldisc
        CurrentDice={CurrentDice}
        roledice={roledice}
        setscore={setscore}
        rule={rule} setrule={setrule}
      />

     

      {rule && <Rules/>}
    </>
  );
}

export default Gameplay;
