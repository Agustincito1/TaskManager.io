interface buttonOff {
    functionOff: () => void;
}

function ButtonOff ({functionOff} : buttonOff) {
  return (
    <button className="addTaskForm-bottonOff" onClick={functionOff}>
      <img src="src\assets\icons\cancelar.png" />
    </button>
  );
}
export default ButtonOff;
