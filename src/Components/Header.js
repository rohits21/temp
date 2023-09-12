import React from "react";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
          {props.title}
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <button className="btn btn-outline-success " type="submit">
            Add Blog
          </button>
        </div>
      </div>
    </nav>
  );
}
