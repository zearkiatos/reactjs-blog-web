import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Route path="/" component={PostsIndex} exact />
    <Route path="/posts/new" component={PostsNew} exact />
  </Router>
);

export default Routes;
