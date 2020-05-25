import React, { Component } from "react";
import "../css/style.css";
import { Container, Button } from "@material-ui/core";
class landing extends Component {
  render() {
    return (
      <div className="bg">
        <Container>
          <div>
            <p className="heading">Todo App</p>

            <div style={{ marginTop: "-3%" }}>
              <Button variant="contained" className="button" href="/todos/new">
                Create Todo
              </Button>
              <Button
                variant="contained"
                className="button"
                href="/all"
                style={{ marginLeft: "8px" }}
              >
                Current Tasks
              </Button>
              <Button
                variant="contained"
                className="button"
                href="/completed"
                style={{ marginLeft: "8px" }}
              >
                Completed
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default landing;
