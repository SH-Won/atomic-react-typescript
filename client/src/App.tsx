import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const LandingPage = lazy(() => import("./page/LandingPage"));
const DetailPage = lazy(() => import("./page/DetailPage"));
const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div>
        <Switch>
          <Route exact path="/posts/:id" component={DetailPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </Suspense>
  );
};

export default App;
