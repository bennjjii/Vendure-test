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
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/detail" exact component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
