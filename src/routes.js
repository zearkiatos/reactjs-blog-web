import { BrowserRouter, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './components/App';

const Routes = () => (
  <BrowserRouter history={createBrowserHistory}>
    <Route path="/" component={App} />
  </BrowserRouter>
);

export default Routes;
