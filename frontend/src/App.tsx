import React from "react";
import { useRoutes } from "react-router-dom";
import PuzzlePage from "./PuzzlePage";


export default function App() {
  const routedPages = useRoutes([
    {
      path: "/",
      element: <PuzzlePage />,
    },
    {
      path: "/puzzle/",
      element: <div>puzzle</div>,
    },
  ]);
  return routedPages;
}
