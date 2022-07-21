import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../pages/_app";
const Nav = () => {
  const { setDarkTheme } = useContext(ThemeContext);
  const ThemeToggle = (e) => {
    if (e.target.checked) {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand">Quera-Task</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
                                    {/* Dark Theme */}
            <li className="nav-item mx-5">
              <div className="form-check form-switch" onChange={ThemeToggle}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Theme
                </label>
              </div>
            </li>
                                      {/* Dark Theme */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
