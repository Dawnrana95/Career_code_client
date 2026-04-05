import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pager/Home/Home";
import Register from "../Pager/Register";
import SignIn from "../Pager/SignIn";
import EnterMainFile from "../Pager/EnterMainFile";
import JobDitels from "../Pager/Home/JobDitels";
import PrivetRouter from "./PrivetRouter";
import JobApply from "../Pager/Home/JobApply";
import MyApplicatoon from "../Pager/MyApplicatoon";
import AdeJobe from "../AddJod/AdeJobe";
import MyPostedJob from "../AddJod/MyPostedJob";
import ViewApplication from "../AddJod/viewApplication";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [

      {
        index: true,
        loader:( () =>fetch('https://career-code-server-gilt.vercel.app/data')),
        hydrateFallbackElement: <p>Loading...</p>,
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
      },
      {
        path: '/jobApply/:id',
        element: <PrivetRouter><JobApply></JobApply></PrivetRouter>
      },
      {
        path: 'myapplication',
        element: <PrivetRouter><MyApplicatoon></MyApplicatoon></PrivetRouter>
      },
      {
        path: '/data/:id',
        loader: ( ({params}) => fetch(`https://career-code-server-gilt.vercel.app/data/${params.id}`)),
        hydrateFallbackElement: <p>Loading...</p>,
        Component: JobDitels
      },
      {
        path: '/adejobe',
        element: <PrivetRouter><AdeJobe></AdeJobe></PrivetRouter>
      },
      {
        path: '/postjobe',
        element: <PrivetRouter><MyPostedJob></MyPostedJob></PrivetRouter>
      },
      {
        path: '/application/:_id',
        element: <PrivetRouter><ViewApplication></ViewApplication></PrivetRouter>,
        hydrateFallbackElement: <p>Loading...</p>,
        loader:({params})=> fetch(`https://career-code-server-gilt.vercel.app/application/job/${params._id}`)
      }


    ]
  },
]);

export default router;