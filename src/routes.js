import { Router, Route } from "react-router-dom";
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import history from './history';

const Routes = () => (
  <Router history={history}>
    <Route path="/" component={PostsIndex} exact />
    <Route path="/posts/new" component={PostsNew} exact />
  </Router>
);

export default Routes;
