import React, { useEffect, useState } from "react";
import data from "./data";
import HeaderControls from "./HeaderControls";
import Keyboard from "./Keyboard";
import Puzzle from "./Puzzle";
import Submissions from "./Submissions";
import "./App.css";

type Props = {
  puzzleHash?: string;
};

function HashedPuzzlePage({ puzzleHash }: Props) {
  return <div className="HashedPuzzlePage">{`hash: ${puzzleHash}`}</div>;
}

export default HashedPuzzlePage;
