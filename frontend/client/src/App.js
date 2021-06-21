import logo from "./logo.svg";
import "./css/App.css";
import "./css/style.default.css";
import "./css/custom.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <div className="app">
        <Landing />
        {/* <Switch>
          <Route path="" exact component={Landing} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
