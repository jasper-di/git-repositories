import './index.css'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import Repositories from "./components/Repositories";
import Readme from "./components/Readme";

function App() {
  return (
      <Router>
        <Route exact path='/'><Home /></Route>
        <Route path='/:username'><Repositories /></Route>
        <Route path='/:username/:project'><Readme /></Route>
      </Router>
  );
}

export default App;
