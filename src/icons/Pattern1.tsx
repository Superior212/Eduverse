import * as React from "react";

function Pattern1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 195 200" fill="none" {...props}>
      <rect
        width={129.87}
        height={129.87}
        rx={7.792}
        fill="#fff"
        fillOpacity={0.2}
      />
      <rect
        x={64.935}
        y={70.13}
        width={129.87}
        height={129.87}
        rx={7.792}
        fill="#fff"
        fillOpacity={0.2}
      />
    </svg>
  );
}

const MemoPattern1 = React.memo(Pattern1);
export default MemoPattern1;
