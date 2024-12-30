import "../styles/Header.css";

function HeaderObject() {
  return (
    <>
      <header className="siteHeader">
        <div className="circle">
          <div className="circle_internal"></div>
        </div>
        <h1 className="siteHeader_h1">Task Manager</h1>
        <nav className="siteHeader_nav">
          <a className="nav_a" href="">
            Login
          </a>
          <a className="nav_a" href="https://www.youtube.com/" target="_blank">
            <div className="nav-a_buttonRegister">Register</div>
          </a>
        </nav>
      </header>
    </>
  );
}

export default HeaderObject;
