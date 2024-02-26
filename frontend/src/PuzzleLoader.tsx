import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {wordle, poems} from "./data";
import HashedPuzzlePage from "./HashedPuzzlePage";
import PuzzlePage from "./PuzzlePage";

type Props = {
  source: string
}
export default function PuzzleLoader({source} : Props) {
  const data = source==="wordle"? wordle : poems
  const { puzzleId } = useParams<{ puzzleId: string }>();
  const puzzleNumber = parseInt(puzzleId || "");
  if (!puzzleNumber) {
    return <HashedPuzzlePage puzzleHash={puzzleId}/>
  }
  const closestMatchingPuzzleNumber = getClosestMatchingPuzzleNumber(puzzleNumber, data);
  if (puzzleNumber === closestMatchingPuzzleNumber) {
    const activePuzzleIndex = data.findIndex((element)=>element.puzzleNumber===puzzleNumber)
    return <PuzzlePage activePuzzleIndex={activePuzzleIndex} source={source} data={data}/>;
  } else {
    console.log(source);
    return <Navigate replace to={`/${source}/${closestMatchingPuzzleNumber}`} />;
  }
}

function getClosestMatchingPuzzleNumber(puzzleNumber: number, data: any[]) {
  const puzzleIndices: number[] = data.map((entry) => entry.puzzleNumber);
  puzzleIndices.sort((a,b)=>a-b)
  return (
    puzzleIndices.filter((val) => val >= puzzleNumber)[0] || puzzleIndices.pop()
  );
}
