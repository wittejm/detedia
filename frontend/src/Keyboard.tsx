import React from "react";
import { handleKeyInput } from "./Puzzle";
const row1 = "QWERTYUIOP";
const row2 = "ASDFGHJKL";
const row3 = "ZXCVBNM";

type Props = {
  activePuzzleIndex: number;
  guess: string[];
  setGuess: any;
  cursorIndex: number;
  setCursorIndex: any;
  usageAllLetters: { [key: string]: string[] };
  submissions: string[][];
  data: {puzzleNumber: number;
    words: string[];
}[]
};

export default function Keyboard({
  activePuzzleIndex,
  guess,
  setGuess,
  cursorIndex,
  setCursorIndex,
  usageAllLetters,
  submissions,
  data
}: Props) {
  return (
    <div>
      {[row1, row2, row3].map((row, rowIndex) => (
        <div className="keyboardRow" key={rowIndex}>
          {row.split("").map((letter) => (
            <KeyButton
              letter={letter}
              usage={usageAllLetters[letter]}
              activePuzzleIndex={activePuzzleIndex}
              guess={guess}
              setGuess={setGuess}
              cursorIndex={cursorIndex}
              setCursorIndex={setCursorIndex}
              submissions={submissions}
              key={letter}
              data={data}
            />
          ))}

          {rowIndex === 2 && (
            <div
              className="delButton"
              onClick={() =>
                handleKeyInput(
                  "Backspace",
                  activePuzzleIndex,
                  guess,
                  setGuess,
                  cursorIndex,
                  setCursorIndex,
                  ()=>null,
                  data
                )
              }
            >
              DEL
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

type KeyButtonProps = {
  letter: string;
  usage: string[];
  activePuzzleIndex: number;
  guess: string[];
  setGuess: any;
  cursorIndex: number;
  setCursorIndex: any;
  submissions: string[][];
  data: {puzzleNumber: number;
    words: string[];}[]
};

function KeyButton({
  letter,
  usage,
  activePuzzleIndex,
  guess,
  setGuess,
  cursorIndex,
  setCursorIndex,
  submissions,
  data
}: KeyButtonProps) {
  const width = 40;
  const height = 44;
  const verticalStepSize = height / usage.length;
  return (
    <div
      className="keyButton"
      onClick={() =>
        handleKeyInput(
          letter,
          activePuzzleIndex,
          guess,
          setGuess,
          cursorIndex,
          setCursorIndex,
          ()=>null,
          data
          )
      }
    >
      <span
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {letter}
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
      >
        {usage.map((color, index) => (
          <rect
            x={0}
            y={index * verticalStepSize}
            width={width}
            height={verticalStepSize}
            stroke={
              keyIsMissing(letter, color, index, guess, submissions)
                ? "red"
                : {
                    green: "#228B22",
                    white: "EEEEEE",
                    yellow: "#FFEECC",
                    blank: "#ACACAC",
                  }[color]
            }
            strokeWidth={
              keyIsMissing(letter, color, index, guess, submissions) ? 4 : 1
            }
            fill={
              {
                green: "#6bd425",
                white: "#DDDDDD",
                yellow: "#FFD700",
                blank: "#BBBBBB",
              }[color]
            }
            key={index}
          />
        ))}
      </svg>
    </div>
  );
}

function keyIsMissing(
  letter: string,
  color: string,
  rowIndex: number,
  guess: string[],
  submissions: string[][],
) {
  if (submissions.length === 0) return false;
  const thisRowGuess = guess.slice(rowIndex * 5, (rowIndex + 1) * 5);
  const thisRowSubmission = submissions[0].slice(
    rowIndex * 5,
    (rowIndex + 1) * 5,
  );

  if (
    color === "green" &&
    !thisRowGuess.some(
      (guessKey, index) =>
        guessKey === thisRowSubmission[index] && guessKey === letter,
    )
  ) {
    return true;
  }
  if (
    color === "yellow" &&
    !thisRowGuess.some((guessKey) => guessKey === letter) &&
    !thisRowGuess.some((guessKey) => guessKey === " ")
  ) {
    return true;
  }
  if (
    color === "blank" &&
    thisRowGuess.some((guessKey) => guessKey === letter)
  ) {
    return true;
  }
  return false;
}
