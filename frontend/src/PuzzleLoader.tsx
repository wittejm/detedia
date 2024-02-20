import React from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "./data";
import HashedPuzzlePage from "./HashedPuzzlePage";
import PuzzlePage from "./PuzzlePage";

export default function PuzzleLoader() {
  const { puzzleId } = useParams<{ puzzleId: string }>();
  const puzzleNumber = parseInt(puzzleId || "");
  if (!puzzleNumber) {
    return <HashedPuzzlePage puzzleHash={puzzleId}/>
  }
  const closestMatchingPuzzleNumber = getClosestMatchingPuzzleNumber(puzzleNumber);
  console.log("closestMatchingPuzzleNumber", closestMatchingPuzzleNumber)
  if (puzzleNumber === closestMatchingPuzzleNumber) {
    const activePuzzleIndex = data.findIndex((element)=>element.puzzleNumber===puzzleNumber)
    return <PuzzlePage activePuzzleIndex={activePuzzleIndex}/>;
  } else {
    return <Navigate replace to={`/${closestMatchingPuzzleNumber}`} />;
  }
}

function getClosestMatchingPuzzleNumber(puzzleNumber: number) {
  const puzzleIndices: number[] = data.map((entry) => entry.puzzleNumber);
  puzzleIndices.sort((a,b)=>a-b)
  console.log(puzzleIndices)
  return (
    puzzleIndices.filter((val) => val >= puzzleNumber)[0] || puzzleIndices.pop()
  );
}
