import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { createTodo } from "../actions/index";
import { connect } from "react-redux";
import { Container, Button, Input } from "@material-ui/core";

class todoNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    if (title) {
      this.props.history.push("/all");
      this.props.createTodo(title);
    }
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Add a New Post</h1>
        {console.log(this.props.todos)}

        <form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.title}
            onChange={this.handleChange}
            className="input1"
            name="title"
            required=""
            placeholder="Enter Todo Task"
            autoFocus={true}
          />

          <div style={{ marginTop: "10px" }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>

            <Link to="/all">
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: "5px" }}
              >
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todoslist };
}

function mapDispatchToProps(dispatch) {
  return {
    createTodo: (data) => {
      return dispatch(createTodo(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(todoNew);
