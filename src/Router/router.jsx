import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pager/Home/Home";
import Register from "../Pager/Register";
import SignIn from "../Pager/SignIn";
import EnterMainFile from "../Pager/EnterMainFile";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [

      {
        index: true,
        Component: Home
      },
      {
        path: '/regoster',
        Component: Register
      },
      {
        path: '/signin',
        Component: SignIn
      },
      {
        path: '/mainFile',
        Component: EnterMainFile
      }



    ]
  },
]);

export default router;