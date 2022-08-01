import React from "react";

export default function Backdrop(props) {
  return (
    <div
      className="Backdrop"
      style={{
        backgroundColor: props?.theme === "light" ? "#FFF" : "#F6F8FF",
      }}
    >
      {props.children}
    </div>
  );
}
