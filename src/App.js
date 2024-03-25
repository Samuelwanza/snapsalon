import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes"; // Assuming you've saved your routes in a file named 'routes.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
