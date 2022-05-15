import React from "react";
import Footer from "../footer";
import CustomSelect from "../Select";

const Select = () => {
  return (
    <div>
      <div class="container">
        <div id="end" class="flex-center flex-column">
          <h1>-- Select Category --</h1>
          <CustomSelect />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Select;
