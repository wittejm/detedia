import {
  Comment,
  Construction,
  ContactMail,
  FormatListBulleted,
  QuestionMark,
} from "@mui/icons-material";
import { Button, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { computeByg } from "./Puzzle";
import { getProgressFromStorage } from "./PuzzlePage";

type Props = {
  activePuzzleIndex: number;
  source: string;
  data: { puzzleNumber: number; words: string[] }[];
};

function HeaderControls({ activePuzzleIndex, source, data }: Props) {
  const navigate = useNavigate();
  return (
    <div className="headerBlock">
      <div className="titleBlock">
        <div className="title">Detedia</div>
        <div className="pageButtons">
          {/*
          <div className="pageButton">
            <QuestionMark />
          </div>
          <div className="pageButton">
            <FormatListBulleted />
          </div>
          <div className="pageButton">
            <Button component={Link} to="/maker">
              <Construction />{" "}
            </Button>
          </div>
          */}
          <div className="pageButton">
            <Tooltip title="Email: wittejm@gmail.com">
              <Button href="mailto:wittejm@gmail.com">
                <Comment />{" "}
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="headerControlsBlock">
        <NavButton
          text="<<"
          onClick={() =>
            navigate(`/${source}/${data[data.length - 1].puzzleNumber}`)
          }
        />
        <NavButton
          text="<"
          onClick={() => {
            navigate(
              `/${source}/${
                data[Math.min(data.length - 1, activePuzzleIndex + 1)]
                  .puzzleNumber
              }`,
            );
          }}
        />
        <div className="headerText">
          {data[activePuzzleIndex].puzzleNumber}
          {"!".repeat(numSuperHardModeViolationsForPuzzleIndex(activePuzzleIndex, data))}
        </div>
        <NavButton
          text=">"
          onClick={() => {
            navigate(
              `/${source}/${
                data[Math.max(0, activePuzzleIndex - 1)].puzzleNumber
              }`,
            );
          }}
        />
        <NavButton
          text=">>"
          onClick={() => navigate(`/${source}/${data[0].puzzleNumber}`)}
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

export function numSuperHardModeViolationsForPuzzleIndex(
  activePuzzleIndex: number,
  data: { puzzleNumber: number; words: string[] }[],
) {
  const sourceWords = data[activePuzzleIndex].words;
  const trueWord = sourceWords[sourceWords.length - 1];
  return numSuperHardModeViolations(sourceWords, trueWord)
}

export function numSuperHardModeViolations(sourceWords :string[], trueWord: string) {
  // for each previous word and subsequent word, and for each letter in the subsequent word,
  // consider whether that letter is a violation of yellows or grays.
  // It's a violation of yellow if it's the same letter as the letter at that index in the previous word.
  // It's a violation of gray if:
  //   - there is at least one gray of this letter in the previous word
  //   - AND the number of this letter in the previous word exceeds
  //         the number of yellows and greens of the letter in the previous word.
  const puzzleLettersLength = 5 * sourceWords.length;
  const isAViolationFlags: number[] = Array(puzzleLettersLength).fill(0);
  sourceWords.forEach((previousWord: string, previousIndex: number) => {
    sourceWords
      .slice(previousIndex + 1)
      .forEach((subsequentWord: string, subsequentIndex: number) => {
        const previousWordByg = computeByg(previousWord, trueWord);
        subsequentWord.split("").forEach((letter, index) => {
          if (
            previousWordByg[index] === "yellow" &&
            letter === previousWord[index]
          ) {
            isAViolationFlags[5 * subsequentIndex + index] = 1;
          }
          const thisLetterWasPreviouslyGreenAtThisIndex =
            letter === previousWord[index] &&
            previousWordByg[index] === "green";
          const thisLetterWasGrayInPreviousWord =
            previousWordByg.filter(
              (bygValue, bygIndex) =>
                bygValue === "gray" && letter === previousWord[bygIndex],
            ).length > 0;
          const countOfThisLetterInSubsequentWord = subsequentWord
            .split("")
            .filter(
              (subsequentWordLetter) => subsequentWordLetter === letter,
            ).length;
          const countOfYellowAndGreenInByg = previousWordByg.filter(
            (value, bygIndex) =>
              previousWord[bygIndex] === letter &&
              (value === "green" || value === "yellow"),
          ).length;
          if (
            !thisLetterWasPreviouslyGreenAtThisIndex &&
            thisLetterWasGrayInPreviousWord &&
            countOfThisLetterInSubsequentWord > countOfYellowAndGreenInByg
          ) {
            isAViolationFlags[
              5 * (previousIndex + subsequentIndex + 1) + index
            ] = 1;
          }
        });
      });
  });
  const numViolations = isAViolationFlags.reduce((sum, next) => sum + next);
  return numViolations;
}

/*
function findFirstUnsolvedPuzzleAfterSolvedPuzzles(data: { puzzleNumber: number, words: string[] }[]) {
  for (let i = 0; i < data.length; i++) {
    const progress = getProgressFromStorage(i);
    break;
  }
}
*/
