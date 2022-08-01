import React from "react";

export default function Container(props) {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "auto",
      }}
    >
      {props.children}
    </div>
  );
}
