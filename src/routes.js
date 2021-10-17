import { Router, Route } from "react-router-dom";
import PostsIndex from "./components/PostsIndex";
import PostsNew from "./components/PostsNew";
import PostsShow from "./components/PostsShow";
import history from "./history";

const Routes = () => (
  <Router history={history}>
    <Route path="/" component={PostsIndex} exact />
    <Route path="/posts/new" component={PostsNew} exact />
    <Route path="/posts/:id" component={PostsShow} />
  </Router>
);

export default Routes;
