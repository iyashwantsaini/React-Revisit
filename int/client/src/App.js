import "./App.css";
import GRID from "./GRID/GRID";
import CreateRoom from "./CreateRoom/CreateRoom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CreateRoom} />
        <Route path="/room/:roomID">
          <GRID />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
