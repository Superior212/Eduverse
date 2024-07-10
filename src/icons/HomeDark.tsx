import * as React from "react";

function HomeDark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 015.06 0l5 4.118A4.046 4.046 0 0121 10.15zm-11 7.1a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z"
        fill="#8B6EE1"
      />
    </svg>
  );
}

const MemoHomeDark = React.memo(HomeDark);
export default MemoHomeDark;
