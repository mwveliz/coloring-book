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
    // FACTOR DE ESCALA PARA MAYOR RESOLUCIÓN
    const scale = 2;
    const width = 600 * scale;
    const height = 400 * scale;

    // Crea el SVG como string, ajustando el viewBox y el tamaño
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect x="${10 * scale}" y="${10 * scale}" width="${580 * scale}" height="${380 * scale}" fill="white" stroke="none"/>
  ${elements.map(element => {
    const props = element.props;
    const tag = element.type as string;
    if (tag === 'g') {
      return `<g>${element.props.children.map((child: any) => {
        const childProps = child.props;
        const childTag = child.type as string;
        const attrs = Object.entries(childProps)
          .filter(([key]) => key !== 'children')
          .map(([key, value]) => {
            // Escala atributos numéricos relevantes
            if (['x', 'y', 'cx', 'cy', 'r', 'width', 'height'].includes(key) && !isNaN(Number(value))) {
              return `${key}="${Number(value) * scale}"`;
            }
            if (key === 'd' && typeof value === 'string') {
              // Escala los valores de los paths SVG
              return `${key}="${value.replace(/-?\d+(\.\d+)?/g, n => String(Number(n) * scale))}"`;
            }
            return `${key}="${value}"`;
          })
          .join(' ');
        return `<${childTag} ${attrs}/>`;
      }).join('')}</g>`;
    } else {
      const attrs = Object.entries(props)
        .filter(([key]) => key !== 'children')
        .map(([key, value]) => {
          if (['x', 'y', 'cx', 'cy', 'r', 'width', 'height'].includes(key) && !isNaN(Number(value))) {
            return `${key}="${Number(value) * scale}"`;
          }
          if (key === 'd' && typeof value === 'string') {
            return `${key}="${value.replace(/-?\d+(\.\d+)?/g, n => String(Number(n) * scale))}"`;
          }
          return `${key}="${value}"`;
        })
        .join(' ');
      return `<${tag} ${attrs}/>`;
    }
  }).join('\n  ')}
</svg>`;

    // Convierte el SVG a un data URL
    const svgBlob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);

    const img = new window.Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(blob => {
          if (blob) {
            const pngUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = pngUrl;
            a.download = `coloring-book-${Date.now()}.png`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(() => URL.revokeObjectURL(pngUrl), 1000);
          }
        }, 'image/png');
      }
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      alert('Error exporting image');
      URL.revokeObjectURL(url);
    };
    img.src = url;
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