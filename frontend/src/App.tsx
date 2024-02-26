import React from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import PuzzleLoader from "./PuzzleLoader";
import {wordle} from './data';
import Maker from "./Maker";
export default function App() {
  const routedPages = useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <Navigate replace to={`/poems/1`} />,
        },
        {
          path: "maker",
          element: <Maker/>,
        },
        {
          path: "poems",
          children: [
            {
              index: true,
              element: <Navigate replace to={`/poems/1`} />,
            },
            {
              path: ":puzzleId",
              element: <PuzzleLoader source="poems"/>,
            },
          ]
        },
        {
          path: "wordle",
          children: [
            {
              index: true,
              element: <Navigate replace to={`/wordle/${wordle[0].puzzleNumber}`} />
            },
            {
              path: ":puzzleId",
              element: <PuzzleLoader source="wordle"/>,
            },
          ]
        },
        
      ],
    },
  ]);
  return routedPages;
}
