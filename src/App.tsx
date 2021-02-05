import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ViewerComponent } from "components/viewer/viewer";
import { LiveComponent } from "components/live/live";
import { ConfigComponent } from "components/config/config";

function Index() {
  return <h2>Home</h2>;
}
function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/frontend/config.html" component={ConfigComponent} />
        <Route path="/frontend/live.html" component={LiveComponent} />
        <Route path="/frontend/viewer.html" component={ViewerComponent} />
      </div>
    </Router>
  );
}

export default AppRouter