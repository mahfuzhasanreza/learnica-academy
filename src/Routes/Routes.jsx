import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import TuitionCalculator from "../Pages/TuitionCalculator/TuitionCalculator";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tuition-calculator",
        element: <TuitionCalculator />,
      },
    ],
  },
]);