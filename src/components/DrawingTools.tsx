import React from 'react';
import { Trees, Flower, Home, Sun, Cloud, Grab as Grass, Zap } from 'lucide-react';

interface DrawingToolsProps {
  onAddElement: (type: string) => void;
  onClear: () => void;
  onExport: () => void;
}

export const DrawingTools: React.FC<DrawingToolsProps> = ({
  onAddElement,
  onClear,
  onExport
}) => {
  const tools = [
    { icon: Trees, label: 'Tree', type: 'tree' },
    { icon: Flower, label: 'Flower', type: 'flower' },
    { icon: Home, label: 'House', type: 'house' },
    { icon: Zap, label: 'Bridge', type: 'bridge' },
    { icon: Sun, label: 'Sun', type: 'sun' },
    { icon: Cloud, label: 'Cloud', type: 'cloud' },
    { icon: Grass, label: 'Grass', type: 'grass' },
    { icon: Zap, label: 'Butterfly', type: 'butterfly' },
    // Nuevos abstractos:
    { icon: Sun, label: 'Paisaje', type: 'abstract-landscape' },
    { icon: Trees, label: 'Montañas', type: 'abstract-mountains' },
    { icon: Grass, label: 'Campos', type: 'abstract-fields' },
    { icon: Zap, label: 'Remolinos', type: 'abstract-swirls' },
    { icon: Sun, label: 'Aurora', type: 'background-aurora' },
    { icon: Cloud, label: 'Mar', type: 'background-sea' },
    { icon: Sun, label: 'Estrellas', type: 'background-stars' },
    { icon: Grass, label: 'Dunas', type: 'background-dunes' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Herramientas de Dibujo</h2>
      
      <div className="grid grid-cols-4 gap-3 mb-6">
        {tools.map(({ icon: Icon, label, type }) => (
          <button
            key={type}
            onClick={() => onAddElement(type)}
            className="flex flex-col items-center p-3 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 group"
            title={label}
          >
            <Icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 mb-1" />
            <span className="text-xs text-gray-500 group-hover:text-blue-600">{label}</span>
          </button>
        ))}
      </div>

      <div className="flex gap-3">  
        <button
          onClick={onClear}
          className="flex-1 px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition-colors duration-200 font-medium"
        >
          Limpiar lienzo
        </button>
        <button
          onClick={onExport}
          className="flex-1 px-4 py-2 bg-green-50 text-green-600 border border-green-200 rounded-lg hover:bg-green-100 transition-colors duration-200 font-medium"
        >
          Exportar PNG
        </button>
      </div>
    </div>
  );
};