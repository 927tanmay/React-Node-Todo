import React, { Component } from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="foot">
          <Link to="/">
            <span className="foot">Home</span>
          </Link>
          <Link to="/todos/new">
            <span className="foot">Create Todo</span>
          </Link>
          <Link to="/all">
            <span className="foot">Todos</span>
          </Link>
          <Link to="/completed">
            <span className="foot">Completed Todos</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
