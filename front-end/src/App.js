import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add from "./Add";
import DonorDetails from "./DonorDetails";
import NotFound from "./NotFound";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  const [admin, setAdmin] = useState({});

  return (
    <Router>
      <div className="App">
        <Navbar admin={admin} setAdmin={setAdmin} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/donors/:id">
              <DonorDetails admin={admin} />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login setAdmin={setAdmin} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
