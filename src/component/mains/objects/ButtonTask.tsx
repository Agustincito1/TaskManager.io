import "../../../css/ButtonTask.css";
interface PropButton {
  onClick: () => void;
}

function ButtonTask({ onClick }: PropButton) {
  return (
    <>
      <button className="buttonAddTask" onClick={onClick}>
        Add task
      </button>
    </>
  );
}

export default ButtonTask;
