import {
  Construction,
  FormatListBulleted,
  QuestionMark,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "./data";
import { computeByg } from "./Puzzle";

type Props = {
  activePuzzleIndex: number;
};

function HeaderControls({ activePuzzleIndex }: Props) {
  const navigate = useNavigate();
  return (
    <div className="headerBlock">
      <div className="titleBlock">
        <div className="title">Detedia</div>
        <div className="pageButtons">
          {/*}
          <div className="pageButton">
            <QuestionMark />
          </div>
          <div className="pageButton">
            <FormatListBulleted />
          </div>
          */}
          <div className="pageButton">
            <Button component={Link} to="/maker">
              <Construction />{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className="headerControlsBlock">
        <NavButton
          text="<<"
          onClick={() => navigate(`/${data[data.length - 1].puzzleNumber}`)}
        />
        <NavButton
          text="<"
          onClick={() =>
            navigate(
              `/${
                data[Math.min(data.length - 1, activePuzzleIndex + 1)]
                  .puzzleNumber
              }`,
            )
          }
        />
        <div className="headerText">
          {data[activePuzzleIndex].puzzleNumber}
          {"!".repeat(numSuperHardModeViolations(activePuzzleIndex)) }
        </div>
        <NavButton
          text=">"
          onClick={() =>
            navigate(
              `/${data[Math.max(0, activePuzzleIndex - 1)].puzzleNumber}`,
            )
          }
        />
        <NavButton
          text=">>"
          onClick={() => navigate(`/${data[0].puzzleNumber}`)}
        />
      </div>
    </div>
  );
}

type NavButtonProps = {
  text: string;
  onClick: () => void;
};
function NavButton({ text, onClick }: NavButtonProps) {
  return (
    <button className="navButton" onClick={onClick}>
      {text}
    </button>
  );
}
export default HeaderControls;

function numSuperHardModeViolations(activePuzzleIndex: number) {
  // for each word: for each blank, check that subsequent words do not contain that letter. UNLESS there's yellow shit going on.
  let numViolations = 0;
  const sourceWords = data[activePuzzleIndex].words;
  const trueWord = sourceWords[sourceWords.length - 1];
  sourceWords.forEach((previousWord, previousIndex)=>
  {
    sourceWords.slice(previousIndex+1).forEach((subsequentWord)=>{
      const byg = computeByg(previousWord, trueWord);
      byg.forEach((c, ind) =>
      {
        const indicesInPreviousWordOfThisLetter = previousWord
          .split("")
          .reduce((soFar, current, currInd) => {
            if (current === previousWord[ind]) soFar.push(currInd);
            return soFar;
          }, [] as number[]);
        const numYellowOrGreenOfThisLetterInPreviousWord =
          indicesInPreviousWordOfThisLetter.filter(
            (ind) => byg[ind] === "yellow" || byg[ind] === "green",
          ).length;
        const foundARepeat =
          (c === "yellow" && previousWord[ind] === subsequentWord[ind]) ||
          (c === "gray" &&
            (numYellowOrGreenOfThisLetterInPreviousWord <
              (subsequentWord.match(new RegExp(previousWord[ind], "g")) || [])
                .length ||
              previousWord[ind] === subsequentWord[ind]));
        if (foundARepeat) {
          numViolations++;
        };
      })
    })
  }
  )
  if (Math.random()) return numViolations;

  let foundRepeat = sourceWords.some((previousWord, previousIndex) =>
    sourceWords.slice(previousIndex + 1).some((subsequentWord) => {
      const byg = computeByg(previousWord, trueWord);
      return byg.some((c, ind) => {
        const indicesInPreviousWordOfThisLetter = previousWord
          .split("")
          .reduce((soFar, current, currInd) => {
            if (current === previousWord[ind]) soFar.push(currInd);
            return soFar;
          }, [] as number[]);

        const numYellowOrGreenOfThisLetterInPreviousWord =
          indicesInPreviousWordOfThisLetter.filter(
            (ind) => byg[ind] === "yellow" || byg[ind] === "green",
          ).length;
        const foundARepeat =
          (c === "yellow" && previousWord[ind] === subsequentWord[ind]) ||
          (c === "gray" &&
            (numYellowOrGreenOfThisLetterInPreviousWord <
              (subsequentWord.match(new RegExp(previousWord[ind], "g")) || [])
                .length ||
              previousWord[ind] === subsequentWord[ind]));
        return foundARepeat;
      });
    }),
  );
  return 0;
  // return !foundRepeat;
}
