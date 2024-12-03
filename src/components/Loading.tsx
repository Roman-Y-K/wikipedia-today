import React from 'react';

const Loading: React.FC = () => (
  <div className="flex my-3 items-center justify-center space-x-2 text-blue-600">
    <svg
      className="animate-spin h-8 w-8"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.042.684 3.925 1.832 5.433l1.168-1.142z"
      ></path>
    </svg>
    <span className="text-xl font-medium">Loading...</span>
  </div>
);

export default React.memo(Loading);
