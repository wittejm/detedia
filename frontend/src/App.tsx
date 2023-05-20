import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import PuzzleLoader from "./PuzzleLoader";
import PuzzlePage from "./PuzzlePage";

export default function App() {
  const routedPages = useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <PuzzlePage activePuzzleIndex={0} />,
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
