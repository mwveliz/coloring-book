import React from 'react';

interface ControlsProps {
  seed: number;
  onSeedChange: (seed: number) => void;
  onNewScene: () => void;
  onExport: () => void;
}

export const Controls: React.FC<ControlsProps> = ({
  seed,
  onSeedChange,
  onNewScene,
  onExport
}) => {
  return (
    <header className="bg-white p-4 flex gap-4 items-center flex-wrap justify-center border-b border-gray-200 rounded-b-xl shadow-md">
      <button
        onClick={onNewScene}
        className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 font-medium text-gray-700"
      >
        New Scene
      </button>
      
      <button
        onClick={onExport}
        className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 font-medium text-gray-700"
      >
        Export SVG
      </button>
      
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-700 font-medium">
          Seed
        </label>
        <input
          type="number"
          value={seed}
          onChange={(e) => onSeedChange(Number(e.target.value) || 1)}
          className="w-20 rounded-md border border-gray-300 px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </header>
  );
};