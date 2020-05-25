import React, { Component } from "react";

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
import { BrowserRouter, Route, Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import FolderIcon from "@material-ui/icons/Folder";
import DoneAllIcon from "@material-ui/icons/DoneAll";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dense: false,
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
              <div>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={todo.title} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <div onClick={(e) => this.onClickDelete(e, todo.id)}>
                          <DeleteIcon />
                        </div>
                      </IconButton>

                      <IconButton
                        edge="end"
                        aria-label="complete"
                        style={{ marginLeft: "15px" }}
                      >
                        <div onClick={(e) => this.onClickCompleted(e, todo.id)}>
                          <DoneAllIcon />
                        </div>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </div>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(home);
