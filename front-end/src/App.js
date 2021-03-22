import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import AppReducer from "./reducers/AppReducer";
import { useReducer } from "react";
import AppContext from "./components/AppContext";

function App() {
  const initState = { user: null, post: [] };
  const [state, dispatch] = useReducer(AppReducer, initState);
  return (
    <Router>
      <AppContext.Provider values={{ state, dispatch }}>
        <div className="App">
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="*">
                <div>Page not found</div>
              </Route>
            </Switch>
          </div>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
