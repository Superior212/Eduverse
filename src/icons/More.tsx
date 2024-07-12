import * as React from "react";

function More(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6.25a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm0 5a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM11.25 15a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
        fill="#28303F"
      />
    </svg>
  );
}

const MemoMore = React.memo(More);
export default MemoMore;
