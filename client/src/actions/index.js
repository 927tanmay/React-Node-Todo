import axios from "axios";
import {
  SET_TODOS,
  POST_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
} from "./ActionType";
var api = "http://localhost:8080";
export const getTodos = () => {
  return (dispatch) => {
    axios.get(api + "/all").then(
      (response) => {
        if (response.data) {
          dispatch(setTodos(response.data));
        }
      },
      (error) => {
        console.log("error", error);
        alert("Data not found!");
      }
    );
  };
};

export const setTodos = (data) => {
  return {
    type: SET_TODOS,
    data: data,
  };
};

export const createTodo = (data) => {
  return (dispatch) => {
    axios
      .post(
        api + "/todos/new",
        { title: data },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(
        (response) => {
          if (response.data) {
            dispatch(postTodo(response.data));
          }
        },
        (error) => {
          console.log("error", error);
          alert("Data not found!");
        }
      );
  };
};

export const postTodo = (data) => {
  return {
    type: POST_TODO,
    data: data,
  };
};

export const removeTodo = (data) => {
  return (dispatch) => {
    axios
      .post(
        api + "/remove",
        { id: data },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(
        (response) => {
          if (response.data) {
            dispatch(setremoveTodo(response.data));
          }
        },
        (error) => {
          console.log("error", error);
          alert("Data not found!");
        }
      );
  };
};

export const setremoveTodo = (id) => {
  return {
    type: REMOVE_TODO,
    data: id,
  };
};

export const completeTodo = (data) => {
  return (dispatch) => {
    axios
      .post(
        api + "/completed",
        { id: data },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(
        (response) => {
          if (response.data) {
            dispatch(setcompleteTodo(response.data));
          }
        },
        (error) => {
          console.log("error", error);
          alert("Data not found!");
        }
      );
  };
};

export const setcompleteTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    data: id,
  };
};

export const editTodo = (title, id) => {
  return (dispatch) => {
    axios
      .post(
        api + "/edit",
        { id: id, title: title },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(
        (response) => {
          if (response.data) {
            dispatch(seteditTodo(response.data));
          }
        },
        (error) => {
          console.log("error", error);
          alert("Data not found!");
        }
      );
  };
};

export const seteditTodo = (data) => {
  return {
    type: EDIT_TODO,
    data: data,
  };
};
