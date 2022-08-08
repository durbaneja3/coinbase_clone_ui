import React from "react";

export default function Button(props) {
  return (
    <button
      style={{
        padding: "1.2rem 1.5rem",
        backgroundColor: "#0052ff",
        color: "#fff",
        borderRadius: "7px",
        border: "none",
        fontSize: "1rem",
        fontWeight: "600",
        cursor: "pointer",
      }}
    >
      {props.children}
    </button>
  );
}
