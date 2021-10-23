import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Compiler from "./pages/Compiler";
import Hero from "./pages/Hero";
import PageTwo from "./pages/PageTwo";

function App() {
  let state = {
    code: null,
  };
  return (
    <>
      <Router>
        <div className="bg-primary text-white">
          <Switch>
            <Route exact path="/">
              <Hero />
            </Route>
            <Route exact path="/uploadfile">
              <PageTwo state={state} />
            </Route>
            <Route path="/compiler">
              <Compiler state={state} />
            </Route>
          </Switch>{" "}
        </div>
      </Router>
    </>
  );
}

export default App;
