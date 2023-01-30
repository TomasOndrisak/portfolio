import React from "react";
import SkillsItem from "./SkillsItem";

function Skills() {
  return (
    <div id="skills">
      <hr className="separator" />
      <div className=" text-center  full-page section padding-from-navbar">
        <h1>Skills</h1>

        <div className="row d-flex justify-content-center pt-lg-5">
          <SkillsItem src={"html.png"} alt={"html image"} title={"HTML"} />
          <SkillsItem src={"css.png"} alt={"html image"} title={"CSS"} />
          <SkillsItem src={"js.png"} alt={"html image"} title={"JS"} />
        </div>
        <div className="row mt-5 mb-5 d-flex justify-content-center">
          <SkillsItem src={"react.png"} alt={"html image"} title={"React Js"} />
          <SkillsItem src={"vue.png"} alt={"html image"} title={"Vue Js"} />
          <SkillsItem src={"vue.png"} alt={"html image"} title={"Aurelia"} />
        </div>
        <div className="row mt-5 mb-5 d-flex justify-content-center">
          <SkillsItem src={"c.png"} alt={"html image"} title={"C#"} />
          <SkillsItem
            src={"TypeScript.png"}
            alt={"html image"}
            title={"TypeScript"}
          />
          <SkillsItem src={"sql.png"} alt={"html image"} title={"SQL"} />
        </div>
        <div className="row mt-5 mb-5 d-flex justify-content-center">
          <SkillsItem src={"git.png"} alt={"html image"} title={"git"} />
          <SkillsItem
            src={"visualstudio.png"}
            alt={"html image"}
            title={"VS code"}
          />
          <SkillsItem
            src={"windows.png"}
            alt={"html image"}
            title={"windows"}
          />
        </div>
      </div>
      <hr className="separator" />
    </div>
  );
}

export default Skills;
