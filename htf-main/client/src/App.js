import React from "react";
import {Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Compiler from "./pages/Compiler";
import Hero from "./pages/Hero";
import PageTwo from "./pages/PageTwo";
function App() {
  return (
    <>
      <Router>
        <div className="bg-primary text-white">
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route exact path="/uploadfile" component={PageTwo} />
            <Route path="/compiler" component={Compiler} />
          </Switch>{" "}
        </div>
      </Router>
    </>
  );
}

export default App;
