import "../styles/TaskManagent.css";




function TaskManagentMain() {
  return (
    <>
      <main className="siteMain">
        <section className="siteMain_section">
          <article className="siteMain-section_article">
            <div className="boxTask" onClick={() => console.log("hola")}>
              Urgent
            </div>

            <div className="boxTask" onClick={() => console.log("hola")}>
              Important
            </div>

            <div className="boxTask" onClick={() => console.log("hola")}>
              Earring
            </div>

            <div className="boxTask" onClick={() => console.log("hola")}>
              Fewer Priorities
            </div>
          </article>

          <article className="siteMain-section_article">
            <button
              className="buttonAddTask"
              onClick={() => console.log("hola")}
            >
              Add task
            </button>

            <div className="percentageTask">
              <p className="percentage" id="percentage">
                0%
              </p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default TaskManagentMain;
