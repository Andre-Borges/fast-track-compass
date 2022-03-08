import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import User from "../pages/User";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact element={<Home />} />
          <Route path="/user" exact element={<User />} />
          <Route path="/user/:id" exact element={<User />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
