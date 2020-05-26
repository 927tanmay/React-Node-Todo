import React, { Component } from "react";

import { connect } from "react-redux";
import { getTodos, removeTodo, completeTodo, editTodo } from "../actions/index";
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
import { BrowserRouter, Route, Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import FolderIcon from "@material-ui/icons/Folder";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Tooltip from "@material-ui/core/Tooltip";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      editid: null,
      edittitle: null,
    };
  }

  componentDidMount() {
    this.props.getTodos();
  }

  onClickDelete = (e, id) => {
    e.preventDefault();
    this.props.removeTodo(id);
  };

  onClickCompleted = (e, id) => {
    e.preventDefault();
    this.props.completeTodo(id);
  };

  onClickEdit = (e, id, title) => {
    e.preventDefault();
    this.setState({
      edit: !this.state.edit,
      editid: id,
      edittitle: title,
    });
  };

  handleSubmit = (event, id) => {
    event.preventDefault();

    if (this.state.edittitle) {
      // this.props.history.push("/all");
      this.props.editTodo(this.state.edittitle, id);
      this.setState({
        edit: !this.state.edit,
        editid: null,
      });
    }
  };

  handleChange = (event) => {
    this.setState({ edittitle: event.target.value });
  };

  displaytodos() {
    return this.props.todos.map((todo) => {
      if (todo.completed == false) {
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
              {this.state.editid != null &&
              this.state.editid == todo.id &&
              this.state.edit ? (
                <div style={{ marginTop: "17px" }}>
                  <input
                    value={this.state.edittitle}
                    style={{
                      textAlign: "center",
                      fontSize: "22px",
                      background: "none",
                      border: "none",
                    }}
                    autoFocus
                    onChange={this.handleChange}
                  ></input>
                  <Tooltip title="Submit">
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      style={{ marginLeft: "10px" }}
                    >
                      <div onClick={(e) => this.handleSubmit(e, todo.id)}>
                        <DoneIcon />
                      </div>
                    </IconButton>
                  </Tooltip>
                </div>
              ) : (
                <div>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AssignmentIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={todo.title} />

                      <ListItemSecondaryAction>
                        <Tooltip title="Edit">
                          <IconButton edge="end" aria-label="edit">
                            <div
                              onClick={(e) =>
                                this.onClickEdit(e, todo.id, todo.title)
                              }
                            >
                              <EditIcon />
                            </div>
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="Mark Complete">
                          <IconButton
                            edge="end"
                            aria-label="complete"
                            style={{ marginLeft: "15px" }}
                          >
                            <div
                              onClick={(e) => this.onClickCompleted(e, todo.id)}
                            >
                              <DoneAllIcon />
                            </div>
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete">
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            style={{ marginLeft: "15px" }}
                          >
                            <div
                              onClick={(e) => this.onClickDelete(e, todo.id)}
                            >
                              <DeleteIcon />
                            </div>
                          </IconButton>
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </div>
              )}
            </Grid>
          </div>

          //   <div key={todo.id} style={{marginTop:"10px"}}>
          //         <Link to={`/todos/${todo.id}`}>

          //             {todo.title}

          //         </Link>

          //         <Button variant="contained" color="secondary" onClick={e=>this.onClickDelete(e,todo.id)}
          //             style={{
          //                 marginLeft:"8px"
          //             }}
          //         >
          //             Delete Post
          //         </Button>
          //         <Button variant="contained" color="primary" onClick={e=>this.onClickCompleted(e,todo.id)}
          //             style={{
          //                 marginLeft:"8px"
          //             }}
          //         >
          //           Mark Completed
          //         </Button>

          //     </div>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Todos</h1>
          <div>{this.displaytodos()}</div>

          <div className="text-xs-right" style={{ marginTop: "100px" }}>
            <Link to="/todos/new">
              <Button variant="contained" color="primary">
                Add Post
              </Button>
            </Link>

            <Link to="/completed">
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "4px" }}
              >
                Completed
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
    editTodo: (title, id) => {
      return dispatch(editTodo(title, id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(home);
