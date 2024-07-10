import * as React from "react";

function ArrowDark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14 16l4-4m0 0l-4-4m4 4H6"
        stroke="#8B6EE1"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoArrowDark = React.memo(ArrowDark);
export default MemoArrowDark;
