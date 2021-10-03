import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import PostsIndex from './components/PostsIndex';

const Routes = () => (
  <Router history={createBrowserHistory}>
    <Route path="/" component={PostsIndex} />
  </Router>
);

export default Routes;
