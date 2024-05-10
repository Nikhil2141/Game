import { useState } from "react";
import Start from "./componets/Start";
import Gameplay from "./componets/Gameplay";

function App() {
  const [play, setplay] = useState();

  const strt = () => {
    setplay((prev) => !prev);
  };
  return <>{play ? <Gameplay /> : <Start game={strt} />}</>;
}

export default App;
