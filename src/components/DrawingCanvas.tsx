import React from 'react';

interface DrawingCanvasProps {
  elements: JSX.Element[];
}

export const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ elements }) => {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg max-w-4xl mx-auto">
      <svg
        viewBox="0 0 600 400"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Drawing area background */}
        <rect
          x="10"
          y="10"
          width="580"
          height="380"
          fill="white"
          stroke="#ddd"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        
        {/* Render all drawing elements */}
        {elements}
      </svg>
    </div>
  );
};