import * as React from "react";

function CategoriesLight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M2.36 14.597c-.375-2.072-.563-3.108-.03-3.81.036-.046.074-.092.114-.135C3.037 10 4.087 10 6.186 10h11.628c2.1 0 3.15 0 3.742.652.04.043.078.089.113.136.534.701.346 1.737-.03 3.809-.54 2.978-.81 4.467-1.828 5.382-.07.063-.141.123-.215.18-1.08.841-2.59.841-5.608.841h-3.976c-3.019 0-4.528 0-5.608-.841a4.007 4.007 0 01-.215-.18c-1.018-.915-1.288-2.404-1.828-5.382z"
        stroke="#fff"
        strokeWidth={1.5}
      />
      <path
        d="M8.02 5.111h7.787c1.309 0 2.949-.188 3.79 1.037C20 6.737 20 8.361 20 10m-7.987-4.889l-.763-1.487c-.268-.522-.519-1.154-1.067-1.44C9.83 2 9.403 2 8.551 2c-2 0-3 0-3.668.545-1.117.913-.857 2.785-.857 4.056V10"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

const MemoCategoriesLight = React.memo(CategoriesLight);
export default MemoCategoriesLight;
