import { Router, Route } from "react-router-dom";
import PostsIndex from "./components/PostsIndex";
import PostsNew from "./components/PostsNew";
import PostsShow from "./components/PostsShow";
import history from "./history";

const Routes = () => (
  <Router history={history}>
    <Route path="/" component={PostsIndex} exact />
    <Route path="/posts/new" component={PostsNew} exact />
    <Route path="/post/:id" component={PostsShow} exact />
  </Router>
);

export default Routes;
