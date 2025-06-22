import React, { useEffect, useState } from "react";
import HeaderControls, {
  numSuperHardModeViolations,
  numSuperHardModeViolationsForPuzzleIndex,
} from "./HeaderControls";
import Keyboard from "./Keyboard";
import Puzzle from "./Puzzle";
import Submissions from "./Submissions";
import "./App.css";
// @ts-ignore
import domtoimage from "dom-to-image-more";
import { useRef } from "react";

function submitGuess(
  guess: string[],
  setGuess: (a: string[]) => void,
  submissions: string[][],
  setSubmissions: any,
  activePuzzleIndex: number,
  source: string,
  data: { puzzleNumber: number; words: string[] }[],
) {
  const puzzleIsSuperHardMode =
    numSuperHardModeViolationsForPuzzleIndex(activePuzzleIndex, data) == 0;
  const joinedGuess: string[] = [];
  for (let i = 0; i < guess.length / 5; i++) {
    joinedGuess.push(
      guess
        .slice(5 * i, 5 * (i + 1))
        .join("")
        .toLowerCase(),
    );
  }
  const submissionIsSuperHardMode =
    numSuperHardModeViolations(
      joinedGuess,
      joinedGuess[joinedGuess.length - 1],
    ) == 0;
  if (puzzleIsSuperHardMode && !submissionIsSuperHardMode) {
    const proceed = confirm(
      "This answer does not qualify as super hard mode. Submit anyway?",
    );
    if (!proceed) {
      return;
    }
  }
  const newSubmissions = [guess, ...submissions];
  saveGuesses(activePuzzleIndex, newSubmissions, source, data);
  setSubmissions(newSubmissions);
  const correctLetters = getCorrectLettersFromGuess(
    guess,
    activePuzzleIndex,
    data,
  );
  setGuess(correctLetters);
}

type Props = {
  activePuzzleIndex: number;
  source: string;
  data: { puzzleNumber: number; words: string[] }[];
};

function PuzzlePage({ activePuzzleIndex, source, data }: Props) {
  const [guess, setGuess] = useState<string[]>(
    Array(5 * data[activePuzzleIndex].words.length).fill(" "),
  );
  const [cursorIndex, setCursorIndex] = useState(0);
  const [submissions, setSubmissions] = useState<string[][]>([]);
  const ref = useRef<HTMLDivElement>(null);

  const changePuzzle = (puzzleIndex: number) => {
    const priorSubmissions = getProgressFromStorage(puzzleIndex, source, data);
    setSubmissions(priorSubmissions);
    if (priorSubmissions.length > 0) {
      const correctLetters = getCorrectLettersFromGuess(
        priorSubmissions[0],
        puzzleIndex,
        data,
      );
      setGuess(correctLetters);
    } else {
      setGuess(Array(5 * data[puzzleIndex].words.length).fill(" "));
    }
    setCursorIndex(0);
  };

  async function captureAndShare() {
    if (!ref.current) {
      console.log("no ref");
      return;
    }

    try {
      const blob = await domtoimage.toBlob(ref.current, {
        style: {
          // optional tweaks if needed
          transform: "scale(1)",
          transformOrigin: "top left",
        },
        height: ref.current.scrollHeight, // important for tall content
        width: ref.current.scrollWidth,
      });

      const file = new File([blob], "screenshot.png", { type: "image/png" });
      const blobUrl = URL.createObjectURL(blob);
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "My letter",
          text: "Check this out",
        });
      } else {
        /*
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `detedia_${data[activePuzzleIndex].puzzleNumber}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        */
        const a = document.createElement("a");
        if ("download" in a) {
          a.href = blobUrl;
          a.download = "screenshot.png";
          // some mobile browsers require the link to be in-DOM
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(blobUrl);
          return;
        }
        window.open(blobUrl, '_blank', 'noopener,noreferrer');
    
      }
    } catch (err) {
      console.error("Failed to capture/share", err);
    }
  }

  useEffect(() => changePuzzle(activePuzzleIndex), [activePuzzleIndex]);

  return (
    <div className="DetediaPage" ref={ref}>
      <HeaderControls
        activePuzzleIndex={activePuzzleIndex}
        source={source}
        data={data}
        captureAndShare={captureAndShare}
      />
      <Puzzle
        activePuzzleIndex={activePuzzleIndex}
        guess={guess}
        setGuess={setGuess}
        cursorIndex={cursorIndex}
        setCursorIndex={setCursorIndex}
        onEnter={() =>
          submitGuess(
            guess.slice(),
            setGuess,
            submissions,
            setSubmissions,
            activePuzzleIndex,
            source,
            data,
          )
        }
        data={data}
      />

      <Keyboard
        activePuzzleIndex={activePuzzleIndex}
        guess={guess}
        setGuess={setGuess}
        cursorIndex={cursorIndex}
        setCursorIndex={setCursorIndex}
        usageAllLetters={getUsageFromSubmissions(
          activePuzzleIndex,
          submissions,
          source,
          data,
        )}
        submissions={submissions}
        data={data}
      />
      <button
        onClick={() =>
          submitGuess(
            guess.slice(),
            setGuess,
            submissions,
            setSubmissions,
            activePuzzleIndex,
            source,
            data,
          )
        }
      >
        SUBMIT
      </button>
      <Submissions
        submissions={submissions}
        activePuzzleIndex={activePuzzleIndex}
        data={data}
      />
      <button
        onClick={() => {
          setGuess(Array(5 * data[activePuzzleIndex].words.length).fill(" "));
          clearGuesses(activePuzzleIndex, source, data);
          setSubmissions([]);
        }}
      >
        CLEAR HISTORY
      </button>
    </div>
  );
}

export default PuzzlePage;

export function getProgressFromStorage(
  activePuzzleIndex: number,
  source: string,
  data: { puzzleNumber: number; words: string[] }[],
) {
  const allSubmissionsString = window.localStorage.getItem(
    `submittedGuesses-${source === "poems" ? "poems-" : ""}${
      data[activePuzzleIndex].puzzleNumber
    }`,
  );
  const res =
    allSubmissionsString &&
    allSubmissionsString.split(":").map((guessSets) => guessSets.split(""));
  return res || [];
}

function saveGuesses(
  activePuzzleIndex: number,
  allSubmissions: string[][],
  source: string,
  data: { puzzleNumber: number; words: string[] }[],
) {
  const allSubmissionsString = allSubmissions
    .map((guessSet) => guessSet.join(""))
    .join(":");
  window.localStorage.setItem(
    `submittedGuesses-${source === "poems" ? "poems-" : ""}${
      data[activePuzzleIndex].puzzleNumber
    }`,
    allSubmissionsString,
  );
}
function clearGuesses(
  activePuzzleIndex: number,
  source: string,
  data: { puzzleNumber: number; words: string[] }[],
) {
  window.localStorage.setItem(
    `submittedGuesses-${source === "poems" ? "poems-" : ""}${
      data[activePuzzleIndex].puzzleNumber
    }`,
    "",
  );
  getProgressFromStorage(activePuzzleIndex, source, data);
}

function getUsageFromSubmissions(
  activePuzzleIndex: number,
  submissions: string[][],
  source: string,
  data: { puzzleNumber: number; words: string[] }[],
) {
  const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const res = letters
    .split("")
    .reduce(
      (acc: any, curr) => (
        (acc[curr] = new Array(data[activePuzzleIndex].words.length)
          .fill("white")
          .map((_, wordIndex) =>
            getKeyColorFromSubmissions(
              curr,
              activePuzzleIndex,
              submissions,
              wordIndex,
              data,
            ),
          )),
        acc
      ),
      {},
    );
  return res;
}

function getKeyColorFromSubmissions(
  letter: string,
  activePuzzleIndex: number,
  submissions: string[][],
  wordIndex: number,
  data: { puzzleNumber: number; words: string[] }[],
) {
  let color = "white";
  const sourceWord = data[activePuzzleIndex].words[wordIndex].toUpperCase();
  submissions.forEach((submission) => {
    const guessWord = submission.slice(5 * wordIndex, 5 * (wordIndex + 1));
    [0, 1, 2, 3, 4].forEach((letterIndex) => {
      if (guessWord[letterIndex] === letter) {
        if (sourceWord[letterIndex] === guessWord[letterIndex]) {
          color = "green";
        } else if (
          sourceWord.includes(guessWord[letterIndex]) &&
          color !== "green"
        ) {
          color = "yellow";
        } else if (color != "green" && color !== "yellow") color = "blank";
      }
    });
  });
  return color;
}

function getCorrectLettersFromGuess(
  guess: string[],
  activePuzzleIndex: number,
  data: { puzzleNumber: number; words: string[] }[],
) {
  return guess.map((letter, index) => {
    const wordIndex = Math.floor(index / 5);
    const sourceLetter = data[activePuzzleIndex].words[wordIndex][index % 5];
    if (sourceLetter !== letter.toLowerCase()) return " ";
    return letter;
  });
}
