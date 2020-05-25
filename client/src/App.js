import React from "react";
import "./App.css";
import Home from "./components/posts";
import { Route } from "react-router-dom";
import AddTodo from "./components/addTodo";
import Completed from "./components/completed";
import Landing from "./components/landing";

// import history from './history';
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/all" component={Home} />
      <Route exact path="/completed" component={Completed} />
      <Route exact path="/todos/new" component={AddTodo} />
    </div>
  );
}

export default App;
