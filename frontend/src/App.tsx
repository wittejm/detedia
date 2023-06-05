import React from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import PuzzleLoader from "./PuzzleLoader";
import data from './data';
import Maker from "./Maker";
export default function App() {
  const routedPages = useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <Navigate replace to={`/${data[0].puzzleNumber}`} />,
        },
        {
          path: "maker",
          element: <Maker/>,
        },
        {
          path: ":puzzleId",
          element: <PuzzleLoader/>,
        },

      ],
    },
  ]);
  return routedPages;
}
