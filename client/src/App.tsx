import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import NavBar from "./component/organisms/NavBar";

const LandingPage = lazy(() => import("./page/LandingPage"));
const DetailPage = lazy(() => import("./page/DetailPage"));
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Suspense fallback={<div>loading...</div>}>
        <div>
          <Switch>
            <Route exact path="/movie/:id" component={DetailPage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </Suspense>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
