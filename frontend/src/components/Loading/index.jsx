import React from "react";
import "./style.css";

const Loading = ({ typeBtn = false }) => {
  return (
    <div className={`loading__wrap ${typeBtn && "reset"}`}>
      <div className="dashed-loading"></div>
    </div>
  );
};

export default Loading;
