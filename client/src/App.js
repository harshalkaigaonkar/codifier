import React from "react";
import Hero from "./pages/Hero";
import Compiler from "./pages/Compiler";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <Switch>
      <div className="bg-primary text-white">
        <Route path="/" exact>
          <Hero />
        </Route>
        <Route path="/compiler">
          <Compiler/>
        </Route>
      </div>
    </Switch>
  );
}

export default App;
