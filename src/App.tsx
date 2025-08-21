import React, { useState } from 'react';
import { DrawingCanvas } from './components/DrawingCanvas';
import { DrawingTools } from './components/DrawingTools';
import { generateShape } from './utils/shapeGenerator.tsx';
import { Palette } from 'lucide-react';

function App() {
  const [elements, setElements] = useState<JSX.Element[]>([]);
  const [shapeSize, setShapeSize] = useState(1); // 1x por defecto
  const [shapeCount, setShapeCount] = useState(1); // 1 por defecto

  const handleAddElement = (type: string) => {
    const newElements: JSX.Element[] = [];
    for (let i = 0; i < shapeCount; i++) {
      const x = 50 + Math.random() * 500;
      const y = 50 + Math.random() * 300;
      newElements.push(generateShape(type, x, y, shapeSize));
    }
    setElements(prev => [...prev, ...newElements]);
  };

  const handleClear = () => {
    setElements([]);
  };

  const handleExport = () => {
    // Create SVG content
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 600 400" xmlns="http://www.w3.2000/svg">
  <rect x="10" y="10" width="580" height="380" fill="white" stroke="none"/>
  ${elements.map(element => {
    // Convert JSX element to SVG string
    const props = element.props;
    const tag = element.type as string;
    
    if (tag === 'g') {
      // Handle group elements
      return `<g>${element.props.children.map((child: any) => {
        const childProps = child.props;
        const childTag = child.type as string;
        const attrs = Object.entries(childProps)
          .filter(([key]) => key !== 'children')
          .map(([key, value]) => `${key}="${value}"`)
          .join(' ');
        return `<${childTag} ${attrs}/>`;
      }).join('')}</g>`;
    } else {
      // Handle single elements
      const attrs = Object.entries(props)
        .filter(([key]) => key !== 'children')
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ');
      return `<${tag} ${attrs}/>`;
    }
  }).join('\n  ')}
</svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `coloring-book-${Date.now()}.svg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Palette className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Simple Coloring Book Creator
            </h1>
          </div>
          <p className="text-gray-600">
            Click the tools below to add shapes to your coloring page
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Tools Panel */}
          <div className="lg:col-span-1">
            {/* NUEVOS CONTROLES */}
            <div className="mb-4 bg-white rounded-lg p-3 border border-gray-200">
              <label className="block text-xs font-semibold mb-1">Tamaño de figura</label>
              <input
                type="range"
                min={0.5}
                max={2}
                step={0.1}
                value={shapeSize}
                onChange={e => setShapeSize(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-gray-500 mb-2">x{shapeSize.toFixed(1)}</div>
              <label className="block text-xs font-semibold mb-1">Cantidad al hacer clic</label>
              <input
                type="range"
                min={1}
                max={5}
                step={1}
                value={shapeCount}
                onChange={e => setShapeCount(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-gray-500">x{shapeCount}</div>
            </div>
            {/* FIN NUEVOS CONTROLES */}
            <DrawingTools
              onAddElement={handleAddElement}
              onClear={handleClear}
              onExport={handleExport}
            />
            
            {/* Instructions */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">How to use:</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Click any tool to add it to your drawing</li>
                <li>• Elements appear in random positions</li>
                <li>• Use "Clear All" to start over</li>
                <li>• Export as SVG when you're happy!</li>
              </ul>
            </div>
          </div>

          {/* Canvas */}
          <div className="lg:col-span-2">
            <DrawingCanvas elements={elements} />
            
            {/* Element Counter */}
            <div className="text-center mt-4 text-gray-600">
              {elements.length === 0 ? (
                "Your canvas is empty - start adding shapes!"
              ) : (
                `${elements.length} element${elements.length !== 1 ? 's' : ''} on canvas`
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;