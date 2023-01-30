import React from "react";

function SkillsItem(props) {
  return (
    <div className="col-lg-2 col-4">
      <img className="col-12 col-lg-3 p-1 p-lg-1" src={require( '../assets/' + props.src )} alt={props.alt} />
      <div className="row p-3">
        <div className="separator pb-2 col-2 bg-black"></div>
        <div className="separator pb-1 col"></div>
      </div>
    <h5>{props.title}</h5>

    </div>
  );
}

export default SkillsItem;




