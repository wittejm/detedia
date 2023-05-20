import React from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "./data";

export default function PuzzleLoader() {
  const { puzzleId } = useParams<{ puzzleId: string }>();
  const puzzleNumber = parseInt(puzzleId || "");
  const closestMatchingPuzzleNumber = getClosestMatchingPuzzleNumber(puzzleNumber);
  if (puzzleNumber === closestMatchingPuzzleNumber) {
    return <div>{puzzleNumber}</div>;
  } else {
    return <Navigate replace to={`/${closestMatchingPuzzleNumber}`} />;
  }
}

function getClosestMatchingPuzzleNumber(puzzleNumber: number) {
  const puzzleIndices = data.map((entry) => entry.puzzleNumber).sort();
  console.log("indices:", puzzleIndices);
  console.log("filtered:", puzzleIndices.filter((val) => val >= puzzleNumber));
  console.log("first:", puzzleIndices.filter((val) => val >= puzzleNumber)[0]);
  return (
    puzzleIndices.filter((val) => val >= puzzleNumber)[0] || puzzleIndices.pop()
  );
}
