import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const router = () => (
  <BrowserRouter history={createBrowserHistory}></BrowserRouter>
);

export default router;
