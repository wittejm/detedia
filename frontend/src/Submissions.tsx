import React from "react";
import { computeByg } from "./Puzzle";
import valid from "./valid";

type Props = {
  submissions: string[][];
  activePuzzleIndex: number;
  data: { puzzleNumber: number, words: string[] }[]
};
export default function Submissions({ submissions, activePuzzleIndex, data }: Props) {
  return (
    <div>
      {submissions.map((submission, index) => (
        <Submission
          key={index}
          activePuzzleIndex={activePuzzleIndex}
          submission={submission}
          data={data}
        />
      ))}
    </div>
  );
}

type SubmissionProps = {
  submission: string[];
  activePuzzleIndex: number;
  data: { puzzleNumber: number, words: string[] }[]
};

function Submission({ submission, activePuzzleIndex, data }: SubmissionProps) {
  return (
    <div className="submission">
      {Array(data[activePuzzleIndex].words.length)
        .fill("")
        .map((_, index) => (
          <SubmissionRow
            activePuzzleIndex={activePuzzleIndex}
            guess={submission.slice(5 * index, 5 * (index + 1))}
            wordIndex={index}
            key={index}
            data={data}
          />
        ))}
    </div>
  );
}
type SubmissionRowProps = {
  activePuzzleIndex: number;
  guess: string[];
  wordIndex: number;
  data: { puzzleNumber: number, words: string[] }[]
};

function SubmissionRow({
  guess,
  wordIndex,
  activePuzzleIndex,
  data
}: SubmissionRowProps) {
  const guessByg = computeByg(
    guess.join("").toLowerCase(),
    data[activePuzzleIndex].words[wordIndex],
  );
  return (
    <div
      className={`row ${
        valid.includes(guess.join("").toLowerCase()) ? "" : "wrongText"
      }`}
    >
      {guess.map((letter, index) => {
        return (
          <SubmissionSquare
            letter={letter}
            wordIndex={wordIndex}
            letterIndex={index}
            color={guessByg[index]}
            key={index}
          />
        );
      })}
    </div>
  );
}
type SubmissionSquareProps = {
  letter: string;
  wordIndex: number;
  letterIndex: number;
  color: string;
};

function SubmissionSquare({
  letter,
  wordIndex,
  letterIndex,
  color,
}: SubmissionSquareProps) {
  const redHighlight = false;
  return (
    <div className={`square ${color} ${redHighlight ? "redHighlight" : ""}`}>
      {letter}
    </div>
  );
}
