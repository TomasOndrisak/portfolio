import React from "react";

function Work() {
  return (
    <div id="work" className=" text-center full-page section">
      <div className="container-fluid">
        <div className="row padding-from-navbar ">
          <div className="col-12 col-lg-2 pb-5">
            <h1>Technologies used</h1>
            <img
              className="col-3 m-1"
              src={require("../assets/react.png")}
              alt={"react"}
            />
            <img
              className="col-3 m-1"
              src={require("../assets/js.png")}
              alt={"js"}
            />
            <img
              className="col-3 m-1"
              src={require("../assets/css.png")}
              alt={"css"}
            />
            <img
              className="col-3 m-1"
              src={require("../assets/html.png")}
              alt={"html"}
            />
            <img
              className="col-3 m-1"
              src={require("../assets/visualstudio.png")}
              alt={"vs code"}
            />
          </div>
          <div className="col-12 col-lg-10">
            <h1>To-do list</h1>
            <p>
              Description: Simple to-do list web application built with React.js
              You can add, remove, edit and check your items added to the list.
            </p>

            <a href="https://to-do-list-1f4rb0mof-tomasondrisak.vercel.app/">
              <img
                className="col-12 col-lg-8 rounded-5"
                src={require("../assets/ToDoListScreen.png")}
                alt="monitor"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
