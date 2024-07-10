import * as React from "react";

function CourseDark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M2 7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 011.093-1.093C3.9 3 4.6 3 6 3c1.4 0 2.1 0 2.635.272a2.5 2.5 0 011.093 1.093C10 4.9 10 5.6 10 7v10c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 01-1.093 1.092C8.1 21 7.4 21 6 21c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 01-1.093-1.092C2 19.1 2 18.4 2 17V7z"
        stroke="#8B6EE1"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 17h.009"
        stroke="#8B6EE1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 7h8M11.449 8.268c-.355-1.33-.533-1.995-.41-2.572a2.46 2.46 0 01.756-1.316c.437-.395 1.1-.573 2.424-.93 1.324-.356 1.987-.534 2.561-.411.506.108.965.374 1.31.76.394.438.572 1.103.927 2.433l2.534 9.5c.355 1.33.533 1.995.41 2.572a2.46 2.46 0 01-.756 1.316c-.437.395-1.1.573-2.424.93-1.324.356-1.986.534-2.561.411a2.447 2.447 0 01-1.31-.76c-.394-.438-.572-1.103-.927-2.433l-2.534-9.5z"
        stroke="#8B6EE1"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.781 16.695l.009-.002"
        stroke="#8B6EE1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8l6.5-2"
        stroke="#8B6EE1"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoCourseDark = React.memo(CourseDark);
export default MemoCourseDark;
