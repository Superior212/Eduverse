import * as React from "react";

function QuizzesDark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2a7.5 7.5 0 00-4.8 13.262C8.19 16.09 9 17.21 9 18.5h6c0-1.29.81-2.411 1.8-3.238A7.5 7.5 0 0012 2z"
        stroke="#8B6EE1"
        strokeWidth={1.5}
      />
      <path
        d="M15 18.5H9v2a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-2z"
        stroke="#8B6EE1"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M10 8c0-1.013.895-2 2-2s2 .82 2 1.833c0 .365-.116.705-.317.991C13.085 9.676 12 10.488 12 11.5"
        stroke="#8B6EE1"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M11.992 14h.009"
        stroke="#8B6EE1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoQuizzesDark = React.memo(QuizzesDark);
export default MemoQuizzesDark;
