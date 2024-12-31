import "../../../css/TaskBox.css";

interface BoxProps {
  name: string;
  colorBox: string;
  activeAnimationNumber: number;
  numberRandom: number;
}

function TaskBox({
  name,
  activeAnimationNumber,
  numberRandom,
  colorBox,
}: BoxProps) {
  return (
    <>
      <div
        style={{
          backgroundColor: colorBox,
        }}
        className={
          activeAnimationNumber === numberRandom ? "boxTask Active" : "boxTask "
        }
        onClick={() => console.log("hola")}
      >
        {name}
      </div>
    </>
  );
}

export default TaskBox;
