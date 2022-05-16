import { Difficulties } from "../data";
import React from "react";
import Selector from "./Selector";

const Difficulty = ({setDifficulty}) => {
  return (
    <div id="end" className="flex-center flex-column">
      <h1>-- Select Difficulty --</h1>
        <Selector data={Difficulties} action = {setDifficulty} />
    </div>
  );
};

export default Difficulty;
