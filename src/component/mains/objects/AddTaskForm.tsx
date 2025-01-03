import "../../../css/AddTaskForm.css";
import ButtonOff from "./buttonOff";

interface formProps {
  display: boolean;
  onClickButton: () => void;
}

function AddTaskForm({ display, onClickButton }: formProps) {
  return (
    <div
      className="addTaskContainer"
      style={{ display: display ? "block" : "none" }}
    >
      <form className="addTaskForm">
        
        <ButtonOff functionOff={onClickButton}></ButtonOff>

        <h2 className="addTaskForm-h2">Add Task</h2>
        <label className="addTaskForm-label" htmlFor="TaskPriority">
          <input
            type="text"
            name="TaskPriority"
            placeholder="Enter task name"
          />
        </label>

        <label className="addTaskForm-label" htmlFor="TaskName">
          <input type="text" name="TaskName" placeholder="Enter task name" />
        </label>

        <label className="addTaskForm-label" htmlFor="TaskDescription">
          <input
            type="text"
            name="TaskDescription"
            placeholder="Enter task name"
          />
        </label>

        <button type="submit" className="addTaskForm-button">
          Confirm
        </button>
        <button type="submit" className="addTaskForm-button">
          Add Subtask
        </button>
      </form>
    </div>
  );
}
export default AddTaskForm;
