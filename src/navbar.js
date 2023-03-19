import React, { useEffect } from "react";
import "./navbar.css";
function Navbar(props) {
  const animeButton = () => {
    
    // for scroll down after load component
    window.scrollTo(0, 820);
  };
  // for logout and remove localstorage with name "login"
  const logout = () => {
    localStorage.removeItem("login");
    window.location = "/";
  };

  let loginORsignin = (
    <a className="btn btn-primary" aria-current="page" href="/signup">
      signup/login
    </a>
  );

  if (props.login == "true") {
    loginORsignin = (
      <button className="btn btn-danger" aria-current="page" onClick={logout}>
        log out
      </button>
    );
  }
  return (
    <div>
      {/* ------------------------------------------------------ */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            AnimeMAKET.ir
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">{loginORsignin}</li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  about me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/addproducts">
                  addproducts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/manage">
                  ManageProducts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={animeButton}>
                  animes
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* ------------------------------------------------------ */}
    </div>
  );
}

export default Navbar;
