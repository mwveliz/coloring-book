import React from 'react';

interface Point {
  x: number;
  y: number;
}

interface SVGGeneratorProps {
  seed: number;
}

// LCG for deterministic randomness
class LCG {
  private s: number;

  constructor(seed: number) {
    this.s = seed >>> 0;
  }

  next(): number {
    this.s = (1664525 * this.s + 1013904223) >>> 0;
    return this.s / (2 ** 32);
  }
}

export const SVGGenerator: React.FC<SVGGeneratorProps> = ({ seed }) => {
  const generateScene = () => {
    const rng = new LCG(seed);
    const complexity = 3;
    const treeCount = 8;
    
    const W = 210;
    const H = 297;
    const M = 15;

    const elements: JSX.Element[] = [];

    // Helper functions
    const randIn = (a: number, b: number) => a + rng.next() * (b - a);
    
    const polyPath = (points: Point[]) => 
      points.map(({ x, y }, i) => (i ? "L" : "M") + x.toFixed(2) + " " + y.toFixed(2)).join(" ");

    const smoothPoly = (points: Point[]) => {
      if (points.length < 3) return polyPath(points);
      
      let d = `M${points[0].x},${points[0].y} C`;
      for (let i = 1; i < points.length - 2; i++) {
        const x1 = (points[i].x + points[i + 1].x) / 2;
        const y1 = (points[i].y + points[i + 1].y) / 2;
        d += `${points[i].x},${points[i].y} ${x1},${y1} `;
      }
      d += `${points[points.length - 2].x},${points[points.length - 2].y} ${points[points.length - 1].x},${points[points.length - 1].y}`;
      return d;
    };

    // Background Hills
    const hillCount = 2 + complexity;
    for (let i = 0; i < hillCount; i++) {
      const hillPoints: Point[] = [];
      const baseY = H * (0.4 + i * 0.05) + randIn(-10, 10);
      const hillWidth = W * (0.5 + rng.next() * 0.4);
      const startX = randIn(M, W - M - hillWidth);
      const peakOffset = randIn(-15, 15);
      const peakHeight = randIn(15, 30);
      
      hillPoints.push({ x: startX, y: baseY });
      hillPoints.push({ x: startX + hillWidth / 2, y: baseY - peakHeight + peakOffset });
      hillPoints.push({ x: startX + hillWidth, y: baseY });
      
      elements.push(
        <path
          key={`hill-${i}`}
          d={smoothPoly(hillPoints)}
          fill="none"
          stroke="black"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    }

    // River
    const riverPoints: Point[] = [];
    const riverStart = H * 0.8;
    const riverEnd = H * 0.6;
    const riverWidth = randIn(20, 30);
    const riverBend = randIn(-10, 10);
    
    riverPoints.push({ x: W / 2 + riverBend, y: riverStart });
    riverPoints.push({ x: W / 2, y: riverEnd });
    
    elements.push(
      <path
        key="river"
        d={polyPath(riverPoints)}
        fill="none"
        stroke="black"
        strokeWidth={riverWidth}
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
    );

    // Arched Footbridge
    const bx1 = W * 0.35;
    const bx2 = W * 0.65;
    const by = H * 0.66;
    const arch: Point[] = [];
    
    for (let i = 0; i <= 24; i++) {
      const t = i / 24;
      const x = bx1 + (bx2 - bx1) * t;
      const y = by - Math.sin(t * Math.PI) * randIn(8, 12);
      arch.push({ x, y });
    }
    
    elements.push(
      <path
        key="bridge-arch"
        d={polyPath(arch)}
        fill="none"
        stroke="black"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    );
    
    const railingHeight = randIn(3, 5);
    const railing1 = arch.map(({ x, y }) => ({ x, y: y - railingHeight }));
    const railing2 = arch.map(({ x, y }) => ({ x, y: y - railingHeight * 2 }));
    
    elements.push(
      <path
        key="railing1"
        d={polyPath(railing1)}
        fill="none"
        stroke="black"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
      <path
        key="railing2"
        d={polyPath(railing2)}
        fill="none"
        stroke="black"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    );

    // Trees
    const treeX = new Set<number>();
    for (let i = 0; i < treeCount; i++) {
      let x = randIn(M, W - M);
      while (Array.from(treeX).some(tx => Math.abs(x - tx) < 25)) {
        x = randIn(M, W - M);
      }
      treeX.add(x);
      
      const y = randIn(H * 0.4, H * 0.7);
      const treeSize = randIn(15, 25);
      const treeType = rng.next() > 0.5 ? 'round' : 'flat';
      
      // Tree trunk
      elements.push(
        <path
          key={`tree-trunk-${i}`}
          d={`M${x} ${y} L${x} ${y + treeSize * 0.3}`}
          fill="none"
          stroke="black"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      
      if (treeType === 'round') {
        const topX = x + randIn(-2, 2);
        const topY = y + randIn(-2, 2);
        elements.push(
          <circle
            key={`tree-crown-${i}`}
            cx={topX}
            cy={topY}
            r={treeSize * 0.8}
            fill="none"
            stroke="black"
            strokeWidth="0.9"
          />
        );
      } else {
        // Flat top tree
        const topY = y + treeSize * 0.1;
        const topX = x + randIn(-3, 3);
        elements.push(
          <path
            key={`tree-top-${i}`}
            d={`M${topX - treeSize * 0.5} ${topY} L${topX + treeSize * 0.5} ${topY}`}
            fill="none"
            stroke="black"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
        
        const leafCount = 5 + Math.floor(rng.next() * 4);
        for (let j = 0; j < leafCount; j++) {
          const leafX = x + randIn(-treeSize * 0.4, treeSize * 0.4);
          const leafY = y - randIn(-treeSize * 0.2, treeSize * 0.2);
          elements.push(
            <circle
              key={`tree-leaf-${i}-${j}`}
              cx={leafX}
              cy={leafY}
              r={treeSize * 0.1}
              fill="none"
              stroke="black"
              strokeWidth="0.9"
            />
          );
        }
      }
    }

    // Frame
    elements.push(
      <rect
        key="frame"
        x={M}
        y={M}
        width={W - 2 * M}
        height={H - 2 * M}
        fill="none"
        stroke="black"
        strokeWidth="1.2"
      />
    );

    return elements;
  };

  return (
    <svg
      viewBox="0 0 210 297"
      className="w-full h-auto bg-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      {generateScene()}
    </svg>
  );
};