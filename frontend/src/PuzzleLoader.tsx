import React from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "./data";
import PuzzlePage from "./PuzzlePage";

export default function PuzzleLoader() {
  const { puzzleId } = useParams<{ puzzleId: string }>();
  const puzzleNumber = parseInt(puzzleId || "");
  const closestMatchingPuzzleNumber = getClosestMatchingPuzzleNumber(puzzleNumber);
  if (puzzleNumber === closestMatchingPuzzleNumber) {
    const activePuzzleIndex = data.findIndex((element)=>element.puzzleNumber===puzzleNumber)
    return <PuzzlePage activePuzzleIndex={activePuzzleIndex}/>;
  } else {
    return <Navigate replace to={`/${closestMatchingPuzzleNumber}`} />;
  }
}

function getClosestMatchingPuzzleNumber(puzzleNumber: number) {
  const puzzleIndices = data.map((entry) => entry.puzzleNumber).sort();
  return (
    puzzleIndices.filter((val) => val >= puzzleNumber)[0] || puzzleIndices.pop()
  );
}
