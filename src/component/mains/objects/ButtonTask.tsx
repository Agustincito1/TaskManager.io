import "../../../css/ButtonTask.css";

function ButtonTask() {
  return (
    <>
      <button className="buttonAddTask" onClick={() => console.log("hola")}>
        Add task
      </button>
    </>
  );
}

export default ButtonTask;
