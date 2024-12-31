import { useState, useEffect } from "react";
import "../../css/TaskManagent.css";
import Percentage from "./objects/PercentageTast";
import ButtonTask from "./objects/ButtonTask";
import TaskBox from "./objects/TaskBox";
import { getRandomNumber } from "../../../dist/utils/functions";

//Get a random number, according to the quantity boxTasks

function TaskManagentMain() {
  const [Style, SetStyle] = useState(getRandomNumber(4));

  //UseEffect when update the style
  useEffect(() => {
    setInterval(() => {
      console.log("se actualizo");
      SetStyle(getRandomNumber(4));
      console.log(SetStyle);
    }, 5000);
  }, [SetStyle]);

  return (
    <>
      <main className="siteMain">
        <section className="siteMain_section">
          <article className="siteMain-section_article">
            <TaskBox
              name="Urgent"
              activeAnimationNumber={1}
              numberRandom={Style}
              colorBox="#F86666"
            ></TaskBox>
            <TaskBox
              name="Important"
              activeAnimationNumber={2}
              numberRandom={Style}
              colorBox="#FFA947"
            ></TaskBox>
            <TaskBox
              name="Earring"
              activeAnimationNumber={3}
              numberRandom={Style}
              colorBox="#F5FB4F"
            ></TaskBox>
            <TaskBox
              name="Fewer Priorities"
              activeAnimationNumber={4}
              numberRandom={Style}
              colorBox="#6694F8"
            ></TaskBox>
          </article>

          <article className="siteMain-section_article">
            <ButtonTask></ButtonTask>
            <Percentage></Percentage>
          </article>
        </section>
      </main>
    </>
  );
}

export default TaskManagentMain;
