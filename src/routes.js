import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const Greeting = () => {
  return <div>Hey there!</div>;
};

const Routes = () => (
  <Router history={createBrowserHistory}>
    <Route path="/greet" component={Greeting} />
    <Route path="/greet2" component={Greeting} />
    <Route path="/greet3" component={Greeting} />
  </Router>
);

export default Routes;
