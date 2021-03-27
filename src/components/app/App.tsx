import { BrowserRouter as Router, Route } from "react-router-dom";
import { ViewerComponent } from "components/viewer/viewer";
import { LiveComponent } from "components/live/live";
import { ConfigComponent } from "components/config/config";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/config.html" component={ConfigComponent} />
        <Route path="/live.html" component={LiveComponent} />
        <Route path="/viewer.html" component={ViewerComponent} />
      </div>
    </Router>
  );
}

export default AppRouter