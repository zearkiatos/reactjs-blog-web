import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';

const Routes = () => (
  <Router history={createBrowserHistory}>
    <Route path="/" component={PostsIndex} exact />
    <Route path="/posts/new" component={PostsNew} exact />
  </Router>
);

export default Routes;
