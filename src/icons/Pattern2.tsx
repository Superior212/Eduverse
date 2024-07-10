import * as React from "react";

function Pattern2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 98 100" fill="none" {...props}>
      <rect
        width={64.935}
        height={64.935}
        rx={6}
        fill="#fff"
        fillOpacity={0.2}
      />
      <rect
        x={32.468}
        y={35.065}
        width={64.935}
        height={64.935}
        rx={6}
        fill="#fff"
        fillOpacity={0.2}
      />
    </svg>
  );
}

const MemoPattern2 = React.memo(Pattern2);
export default MemoPattern2;
