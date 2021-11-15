import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

// Code-splitting is automated for `routes` directory
import Home from "./routes/Home";
import Creationals from "./routes/Creationals";
import Structurals from "./routes/Structurals";
import Comportamentales from "./routes/Comportamentales";

const App = () => (
  <div id="app">
    <Router>
      <Header />
      <Navbar />
      <main className="app-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/creationals" component={Creationals} />
          <Route path="/structurals" component={Structurals} />
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
