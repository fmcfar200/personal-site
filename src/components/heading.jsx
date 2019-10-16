import React from "react";
import "../styles/common.css";

const Heading = props => {
  const { number, title } = props;
  return (
    <div className="heading">
      <h3>
        <span>{number}. </span> {title}
      </h3>
      <div className="line"></div>
    </div>
  );
};

export default Heading;
