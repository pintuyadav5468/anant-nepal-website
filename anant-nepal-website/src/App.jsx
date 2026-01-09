import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import './styles.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/programs" component={Programs} />
      </Switch>
    </Router>
  );
}