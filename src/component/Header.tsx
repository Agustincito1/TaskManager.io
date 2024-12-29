import "../styles/Header.css";

function HeaderObject() {
  return (
    <>
      <header className="Header">
        <h1 className="Header__h1">Task manager</h1>
        <nav className="Header__nav">
          <a className="Header__nav__a" href="">
            Login
          </a>
          <a
            className="Header__nav__a"
            href="https://www.youtube.com/"
            target="_blank"
          >
            Register
          </a>
        </nav>
      </header>
    </>
  );
}

export default HeaderObject;
