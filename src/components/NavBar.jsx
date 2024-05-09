import React from "react";

const NavBar = ({ setCategory }) => {
  const handleActive = () => {
    const listItem = document.querySelectorAll(".list-item");
    listItem.addEventListener("click", () => {
      listItem.classList.toggle("active");
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-2 p-2 mb-3">
        <div className="container-fluid">
          <a className="navbar-brand">
            <h1 className="logo">
              news<span className="badge text-bg-info">Web</span>
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav-bar"
            aria-controls="nav-bar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav-bar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("business")}
                >
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("health")}>
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("sports")}>
                  Sports
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
