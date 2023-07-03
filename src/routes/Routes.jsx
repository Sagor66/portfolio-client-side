import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import GetInTouch from "../pages/Home/GetInTouch/GetInTouch";
import AboutMe from "../pages/About/AboutMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'contact',
        element: <GetInTouch></GetInTouch>
      },
      {
        path: 'about',
        element: <AboutMe></AboutMe>
      }
    ],
  },
]);