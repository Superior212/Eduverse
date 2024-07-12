import * as React from "react";

function Martin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 56 56" fill="none" {...props}>
      <rect width={56} height={56} rx={28} fill="#8B6EE1" fillOpacity={0.1} />
      <path
        d="M36.368 19.32V36h-2.736V24.576L28.544 36h-1.896l-5.112-11.424V36H18.8V19.32h2.952l5.856 13.08 5.832-13.08h2.928z"
        fill="#8B6EE1"
      />
    </svg>
  );
}

const MemoMartin = React.memo(Martin);
export default MemoMartin;
