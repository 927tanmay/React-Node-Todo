import {
  SET_TODOS,
  POST_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
} from "../actions/ActionType";

const initialState = {
  items: [],
};

function postsReducer(state = initialState, action) {
  let localState = Object.assign({}, state);

  switch (action.type) {
    case SET_TODOS:
      console.log(action.data);
      localState.items = action.data;
      return localState;

    case EDIT_TODO:
      console.log(action.data);
      localState.items = action.data;
      return localState;

    case POST_TODO:
      console.log(action.data);
      localState.items = action.data;
      return localState;
    // const tmp={
    //     id: state.length,
    //     title: action.data,
    //     completed: false
    // }
    // return[...state,tmp]

    case REMOVE_TODO:
      console.log(action.data);
      localState.items = action.data;
      return localState;
    // console.log("id",action.data)
    // return state.filter(todo =>
    //     todo.id != action.data
    //   );

    case COMPLETE_TODO:
      console.log(action.data);
      localState.items = action.data;
      return localState;

    // console.log("id",action.data)
    // return state.map(todo =>
    //     todo.id == action.data ?
    //       {
    //         ...todo,
    //         completed: true,
    //       } :
    //       todo
    //   );

    default:
      return state;
  }
}

export default postsReducer;
