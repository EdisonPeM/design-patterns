import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

// Code-splitting is automated for `routes` directory
import Inicio from "./routes/Inicio";
import Creacionales from "./routes/Creacionales";
import Estructurales from "./routes/Estructurales";
import Comportamentales from "./routes/Comportamentales";

const App = () => (
  <div id="app">
    <Router>
      <Header />
      <Navbar />
      <main className="app-content">
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/creacionales" component={Creacionales} />
          <Route path="/estructurales" component={Estructurales} />
          <Route path="/comportamentales" component={Comportamentales} />

          {/* 404 returns to Home */}
          <Route path="*">
            <Redirect from="*" to="/" />
          </Route>
        </Switch>
      </main>
    </Router>
  </div>
);

export default App;
