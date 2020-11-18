import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import RepoDetails from "./RepoDetails";
import Repos from "./Repos";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/repos/:username" component={Repos} />
        <Route path="/repos/:username/:reponame" component={RepoDetails} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
