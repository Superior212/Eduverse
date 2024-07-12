import * as React from "react";

function Eniola(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 56 56" fill="none" {...props}>
      <rect width={56} height={56} rx={28} fill="#8B6EE1" fillOpacity={0.1} />
      <path
        d="M26.536 21.528v4.896h5.76v2.232h-5.76v5.112h6.48V36H23.8V19.296h9.216v2.232h-6.48z"
        fill="#8B6EE1"
      />
    </svg>
  );
}

const MemoEniola = React.memo(Eniola);
export default MemoEniola;
