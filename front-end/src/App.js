import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
