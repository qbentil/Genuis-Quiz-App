import { Categories } from "../data";
import React from "react";
import Select from "./Select";
import Selector from "./Selector";

const Category = ({setCategory}) => {
  return (
    <div id="end" className="flex-center flex-column">
      <h1>-- Select Category --</h1>
        <Select options={Categories} action = {setCategory} />
        {/* <Selector data={Categories} action = {setCategory} /> */}

    </div>
  );
};

export default Category;
