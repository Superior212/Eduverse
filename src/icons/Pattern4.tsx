import * as React from "react";

function Pattern4(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 98 61" fill="none" {...props}>
      <rect
        y={-39}
        width={64.935}
        height={64.935}
        rx={6}
        fill="#fff"
        fillOpacity={0.2}
      />
      <rect
        x={32.468}
        y={-3.935}
        width={64.935}
        height={64.935}
        rx={6}
        fill="#fff"
        fillOpacity={0.2}
      />
    </svg>
  );
}

const MemoPattern4 = React.memo(Pattern4);
export default MemoPattern4;
