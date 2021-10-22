import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import PageTwo from "./pages/PageTwo";
function App() {
  return (
    <>
      <Router>
        <div className="bg-primary text-white">
          <Route exact path="/" component={Hero} />
          <Route exact path="/uploadfile" component={PageTwo} />
        </div>
      </Router>
    </>
  );
}

export default App;
