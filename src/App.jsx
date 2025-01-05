import SignIn from "./components/SignIn";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import TableData from "./components/TableData";
import Bootstrap from "./components/Bootstrap";
import LearnCss from "./components/learnCss";
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/tabledata",
    element: <TableData />,
  },

  {
    path: "/bootstrap",
    element: <Bootstrap />,
  },
  {
    path: "/learn",
    element: <LearnCss/>
  }

]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
