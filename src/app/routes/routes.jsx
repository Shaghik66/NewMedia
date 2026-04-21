import { createBrowserRouter } from "react-router-dom";
import {Home} from "../../components/pages/Home/Home";
import Users from "../../components/pages/Users/Users";
import { Profile } from "../../components/pages/Profile/Profile";
import Layout from "../../components/templates/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
