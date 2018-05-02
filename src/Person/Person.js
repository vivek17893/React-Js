import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.delete}>Delete</p>
      <p onClick={props.click}>
        Im a {props.name} and iam {Math.random()}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
      {/*<input type="text" onChange={(event)=>props.change(event)} value={props.name} />*/}
    </div>
  );
};

export default person;
