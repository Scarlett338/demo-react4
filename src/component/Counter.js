import React from "react";

export default function Counter(props) {
  return (
    <div>
      <h2>Total meals : {props.total}</h2>
      <h2>Finished meals : {props.finished}</h2>
    </div>
  );
}
