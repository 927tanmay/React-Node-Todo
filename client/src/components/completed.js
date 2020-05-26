import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTodos, removeTodo, completeTodo } from "../actions/index";
import {
  Container,
  Button,
  Grid,
  Typography,
  List,
  IconButton,
  Avatar,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FolderIcon from "@material-ui/icons/Folder";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Tooltip from "@material-ui/core/Tooltip";

class completed extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  onClickDelete = (e, id) => {
    e.preventDefault();
    this.props.removeTodo(id);
    console.log("delete", id);
  };

  displaytodos() {
    return this.props.todos.map((todo) => {
      if (todo.completed == true) {
        return (
          <div
            key={todo.id}
            style={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              align: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={6}>
              <div>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <AssignmentTurnedInIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={todo.title} />
                    <ListItemSecondaryAction>
                      <Tooltip title="Delete">
                        <IconButton edge="end" aria-label="delete">
                          <div onClick={(e) => this.onClickDelete(e, todo.id)}>
                            <DeleteIcon />
                          </div>
                        </IconButton>
                      </Tooltip>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </div>
            </Grid>
          </div>

          // <li className="list-group-item" key={todo.id}>
          //     <Link to={`/todos/${todo.id}`}>
          //         {todo.title}
          //     </Link>
          // </li>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Completed Todos</h1>
          <div>{this.displaytodos()}</div>

          <div style={{ marginTop: "100px" }}>
            <Link to="/todos/new">
              <Button variant="contained" color="primary">
                Add Post
              </Button>
            </Link>

            <Link to="/all">
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "4px" }}
              >
                Active Todos
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todoslist.items };
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos: () => {
      return dispatch(getTodos());
    },
    removeTodo: (id) => {
      return dispatch(removeTodo(id));
    },
    completeTodo: (id) => {
      return dispatch(completeTodo(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(completed);
