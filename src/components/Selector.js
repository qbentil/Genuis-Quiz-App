import React, { useState } from "react";

const Selector = ({ data, action }) => {
  // const [first, setFirst] = useState(null)
  return data.map((d, index) => (
    <button className="btn" onClick={() => action(d)} key={index}>
      {d.title}
    </button>
  ));
};

export default Selector;
