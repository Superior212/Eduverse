import * as React from "react";

function CommunityDark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12.5 19v3M10.5 22h4"
        stroke="#8B6EE1"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 16a7 7 0 110-14 7 7 0 010 14z"
        stroke="#8B6EE1"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M8.5 4c.654.038.992.359 1.573.973 1.05 1.11 2.1 1.202 2.8.832 1.049-.555.167-1.453 1.399-1.94.803-.32.915-1.185.468-1.865M20 10c-1.5 0-1.766 1.247-3 1-2.5-.5-3.208.059-3.208 1.251s0 1.192-.52 2.086c-.338.582-.457 1.163.217 1.663"
        stroke="#8B6EE1"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2a9.848 9.848 0 00-3 7.083C3.5 14.56 7.977 19 13.5 19a10.01 10.01 0 007-2.835"
        stroke="#8B6EE1"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

const MemoCommunityDark = React.memo(CommunityDark);
export default MemoCommunityDark;
