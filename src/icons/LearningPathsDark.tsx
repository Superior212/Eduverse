import * as React from "react";

function LearningPathsDark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M18 8a3 3 0 100-6 3 3 0 000 6zM6 22a3 3 0 100-6 3 3 0 000 6zM12 5H8.5a3.5 3.5 0 100 7h7a3.5 3.5 0 110 7H12"
        stroke="#8B6EE1"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoLearningPathsDark = React.memo(LearningPathsDark);
export default MemoLearningPathsDark;
