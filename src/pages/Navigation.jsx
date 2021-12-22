import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DonationForm from "./DonationForm";
import Message from "./Message";

const Navigation = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/message">
            <Message />
          </Route>

          <Route exact path="/">
            <DonationForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
