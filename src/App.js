import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MyCart from "./pages/MyCart";
import MyProfile from "./pages/MyProfile";
import AddAddress from "./pages/AddAddress";
import MyOrders from "./pages/MyOrders";

function App() {
  return (
    <>
      <Router>
        <Navbar trial="" />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/cart">
            <MyCart />
          </Route>
          <Route exact path="/myprofile">
            <MyProfile />
          </Route>
          <Route exact path="/addaddress">
            <AddAddress />
          </Route>
          <Route exact path="/myorders">
            <MyOrders />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
