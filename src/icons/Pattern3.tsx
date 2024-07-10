import * as React from "react";

function Pattern3(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 195 160" fill="none" {...props}>
      <rect
        width={129.87}
        height={129.87}
        rx={16}
        fill="#fff"
        fillOpacity={0.2}
      />
      <rect
        x={64.935}
        y={70.13}
        width={129.87}
        height={129.87}
        rx={16}
        fill="#fff"
        fillOpacity={0.2}
      />
    </svg>
  );
}

const MemoPattern3 = React.memo(Pattern3);
export default MemoPattern3;
