import * as React from "react";

function ProfileLight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C4.816 21.248 6.045 22 7.59 22h8.818c1.546 0 2.775-.752 3.878-1.803 2.26-2.153-1.45-3.873-2.865-4.715a10.663 10.663 0 00-10.844 0z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 6.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
        stroke="#fff"
        strokeWidth={1.5}
      />
    </svg>
  );
}

const MemoProfileLight = React.memo(ProfileLight);
export default MemoProfileLight;
