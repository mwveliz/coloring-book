// Professional coloring book shape generators
export const generateShape = (type: string, x: number, y: number): JSX.Element => {
  const strokeProps = {
    fill: 'none',
    stroke: '#000',
    strokeWidth: '1.5',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (type) {
    case 'tree':
      return (
        <g key={`tree-${Date.now()}-${Math.random()}`}>
          {/* Tree trunk with texture lines */}
          <path
            d={`M${x-4} ${y+20} Q${x-2} ${y+15} ${x-3} ${y+10} Q${x-1} ${y+5} ${x} ${y} Q${x+1} ${y+5} ${x+3} ${y+10} Q${x+2} ${y+15} ${x+4} ${y+20} Z`}
            {...strokeProps}
          />
          <path d={`M${x-2} ${y+18} Q${x} ${y+16} ${x+2} ${y+18}`} {...strokeProps} />
          <path d={`M${x-1} ${y+12} Q${x+1} ${y+10} ${x+2} ${y+12}`} {...strokeProps} />
          
          {/* Organic cloud-like foliage */}
          <path
            d={`M${x-25} ${y-5} Q${x-30} ${y-15} ${x-20} ${y-20} Q${x-15} ${y-25} ${x-5} ${y-22} Q${x} ${y-28} ${x+8} ${y-24} Q${x+15} ${y-26} ${x+22} ${y-20} Q${x+28} ${y-15} ${x+25} ${y-8} Q${x+20} ${y-2} ${x+15} ${y+2} Q${x+8} ${y+5} ${x} ${y+3} Q${x-8} ${y+5} ${x-15} ${y+2} Q${x-20} ${y-2} ${x-25} ${y-5} Z`}
            {...strokeProps}
          />
          
          {/* Inner foliage details */}
          <circle cx={x-8} cy={y-12} r="3" {...strokeProps} />
          <circle cx={x+6} cy={y-15} r="2.5" {...strokeProps} />
          <circle cx={x-2} cy={y-18} r="2" {...strokeProps} />
          <circle cx={x+12} cy={y-8} r="2.5" {...strokeProps} />
        </g>
      );

    case 'flower':
      return (
        <g key={`flower-${Date.now()}-${Math.random()}`}>
          {/* Flower stem with leaves */}
          <path d={`M${x} ${y+15} Q${x-2} ${y+25} ${x} ${y+35} Q${x+1} ${y+45} ${x-1} ${y+50}`} {...strokeProps} />
          
          {/* Leaves on stem */}
          <path d={`M${x-2} ${y+30} Q${x-8} ${y+28} ${x-10} ${y+32} Q${x-8} ${y+36} ${x-2} ${y+34}`} {...strokeProps} />
          <path d={`M${x+2} ${y+38} Q${x+8} ${y+36} ${x+10} ${y+40} Q${x+8} ${y+44} ${x+2} ${y+42}`} {...strokeProps} />
          
          {/* Detailed flower petals */}
          <path d={`M${x} ${y-15} Q${x-3} ${y-20} ${x} ${y-25} Q${x+3} ${y-20} ${x} ${y-15}`} {...strokeProps} />
          <path d={`M${x+12} ${y-8} Q${x+17} ${y-11} ${x+22} ${y-8} Q${x+17} ${y-5} ${x+12} ${y-8}`} {...strokeProps} />
          <path d={`M${x+12} ${y+8} Q${x+17} ${y+11} ${x+22} ${y+8} Q${x+17} ${y+5} ${x+12} ${y+8}`} {...strokeProps} />
          <path d={`M${x} ${y+15} Q${x+3} ${y+20} ${x} ${y+25} Q${x-3} ${y+20} ${x} ${y+15}`} {...strokeProps} />
          <path d={`M${x-12} ${y+8} Q${x-17} ${y+11} ${x-22} ${y+8} Q${x-17} ${y+5} ${x-12} ${y+8}`} {...strokeProps} />
          <path d={`M${x-12} ${y-8} Q${x-17} ${y-11} ${x-22} ${y-8} Q${x-17} ${y-5} ${x-12} ${y-8}`} {...strokeProps} />
          
          {/* Flower center with details */}
          <circle cx={x} cy={y} r="6" {...strokeProps} />
          <circle cx={x-2} cy={y-1} r="1" {...strokeProps} />
          <circle cx={x+2} cy={y+1} r="1" {...strokeProps} />
          <circle cx={x} cy={y+2} r="0.8" {...strokeProps} />
        </g>
      );

    case 'house':
      return (
        <g key={`house-${Date.now()}-${Math.random()}`}>
          {/* House base */}
          <rect x={x-25} y={y-5} width="50" height="30" {...strokeProps} />
          
          {/* Detailed roof */}
          <path d={`M${x-30} ${y-5} L${x} ${y-30} L${x+30} ${y-5} Z`} {...strokeProps} />
          <path d={`M${x-25} ${y-8} L${x-20} ${y-12} M${x-15} ${y-15} L${x-10} ${y-18} M${x-5} ${y-21} L${x} ${y-24}`} {...strokeProps} />
          <path d={`M${x+5} ${y-21} L${x+10} ${y-18} M${x+15} ${y-15} L${x+20} ${y-12} M${x+25} ${y-8} L${x+22} ${y-10}`} {...strokeProps} />
          
          {/* Door with panels */}
          <rect x={x-8} y={y+5} width="16" height="20" {...strokeProps} />
          <path d={`M${x-6} ${y+7} L${x+6} ${y+7} M${x-6} ${y+15} L${x+6} ${y+15}`} {...strokeProps} />
          <circle cx={x+4} cy={y+12} r="1" {...strokeProps} />
          
          {/* Windows with cross frames */}
          <rect x={x-20} y={y-2} width="10" height="8" {...strokeProps} />
          <path d={`M${x-15} ${y-2} L${x-15} ${y+6} M${x-20} ${y+2} L${x-10} ${y+2}`} {...strokeProps} />
          
          <rect x={x+10} y={y-2} width="10" height="8" {...strokeProps} />
          <path d={`M${x+15} ${y-2} L${x+15} ${y+6} M${x+10} ${y+2} L${x+20} ${y+2}`} {...strokeProps} />
          
          {/* Chimney */}
          <rect x={x+15} y={y-25} width="6" height="12" {...strokeProps} />
          <rect x={x+13} y={y-26} width="10" height="3" {...strokeProps} />
        </g>
      );

    case 'bridge':
      return (
        <g key={`bridge-${Date.now()}-${Math.random()}`}>
          {/* Bridge deck */}
          <path d={`M${x-30} ${y+5} Q${x} ${y-5} ${x+30} ${y+5}`} {...strokeProps} />
          <path d={`M${x-30} ${y+8} Q${x} ${y-2} ${x+30} ${y+8}`} {...strokeProps} />
          
          {/* Bridge posts */}
          <path d={`M${x-25} ${y+5} L${x-25} ${y+20}`} {...strokeProps} />
          <path d={`M${x-15} ${y+2} L${x-15} ${y+17}`} {...strokeProps} />
          <path d={`M${x-5} ${y} L${x-5} ${y+15}`} {...strokeProps} />
          <path d={`M${x+5} ${y} L${x+5} ${y+15}`} {...strokeProps} />
          <path d={`M${x+15} ${y+2} L${x+15} ${y+17}`} {...strokeProps} />
          <path d={`M${x+25} ${y+5} L${x+25} ${y+20}`} {...strokeProps} />
          
          {/* Railings */}
          <path d={`M${x-25} ${y} Q${x} ${y-8} ${x+25} ${y}`} {...strokeProps} />
          <path d={`M${x-25} ${y-3} Q${x} ${y-11} ${x+25} ${y-3}`} {...strokeProps} />
          
          {/* Water underneath */}
          <path d={`M${x-35} ${y+25} Q${x-30} ${y+22} ${x-25} ${y+25} Q${x-20} ${y+28} ${x-15} ${y+25} Q${x-10} ${y+22} ${x-5} ${y+25}`} {...strokeProps} />
          <path d={`M${x+5} ${y+25} Q${x+10} ${y+22} ${x+15} ${y+25} Q${x+20} ${y+28} ${x+25} ${y+25} Q${x+30} ${y+22} ${x+35} ${y+25}`} {...strokeProps} />
        </g>
      );

    case 'cloud':
      return (
        <g key={`cloud-${Date.now()}-${Math.random()}`}>
          {/* Detailed cloud shape */}
          <path
            d={`M${x-20} ${y+2} Q${x-25} ${y-5} ${x-18} ${y-8} Q${x-15} ${y-12} ${x-8} ${y-10} Q${x-5} ${y-15} ${x+2} ${y-12} Q${x+8} ${y-16} ${x+15} ${y-12} Q${x+20} ${y-8} ${x+18} ${y-2} Q${x+22} ${y+3} ${x+15} ${y+6} Q${x+8} ${y+8} ${x} ${y+6} Q${x-8} ${y+8} ${x-15} ${y+6} Q${x-22} ${y+3} ${x-20} ${y+2} Z`}
            {...strokeProps}
          />
          
          {/* Inner cloud details */}
          <path d={`M${x-12} ${y-2} Q${x-8} ${y-5} ${x-4} ${y-2} Q${x-8} ${y+1} ${x-12} ${y-2}`} {...strokeProps} />
          <path d={`M${x+4} ${y-4} Q${x+8} ${y-7} ${x+12} ${y-4} Q${x+8} ${y-1} ${x+4} ${y-4}`} {...strokeProps} />
        </g>
      );

    case 'grass':
      return (
        <g key={`grass-${Date.now()}-${Math.random()}`}>
          {/* Multiple grass blades */}
          <path d={`M${x-15} ${y+10} Q${x-14} ${y-5} ${x-12} ${y-8} Q${x-10} ${y-5} ${x-9} ${y+10}`} {...strokeProps} />
          <path d={`M${x-8} ${y+10} Q${x-7} ${y-3} ${x-5} ${y-6} Q${x-3} ${y-3} ${x-2} ${y+10}`} {...strokeProps} />
          <path d={`M${x-1} ${y+10} Q${x} ${y-4} ${x+2} ${y-7} Q${x+4} ${y-4} ${x+5} ${y+10}`} {...strokeProps} />
          <path d={`M${x+6} ${y+10} Q${x+7} ${y-2} ${x+9} ${y-5} Q${x+11} ${y-2} ${x+12} ${y+10}`} {...strokeProps} />
          <path d={`M${x+13} ${y+10} Q${x+14} ${y-6} ${x+16} ${y-9} Q${x+18} ${y-6} ${x+19} ${y+10}`} {...strokeProps} />
          
          {/* Small flowers in grass */}
          <circle cx={x-10} cy={y-2} r="1.5" {...strokeProps} />
          <circle cx={x+8} cy={y-1} r="1.2" {...strokeProps} />
        </g>
      );

    case 'sun':
      return (
        <g key={`sun-${Date.now()}-${Math.random()}`}>
          {/* Sun center with face */}
          <circle cx={x} cy={y} r="15" {...strokeProps} />
          
          {/* Sun rays - varied lengths */}
          <path d={`M${x} ${y-20} L${x} ${y-28}`} {...strokeProps} />
          <path d={`M${x+14} ${y-14} L${x+20} ${y-20}`} {...strokeProps} />
          <path d={`M${x+20} ${y} L${x+28} ${y}`} {...strokeProps} />
          <path d={`M${x+14} ${y+14} L${x+20} ${y+20}`} {...strokeProps} />
          <path d={`M${x} ${y+20} L${x} ${y+28}`} {...strokeProps} />
          <path d={`M${x-14} ${y+14} L${x-20} ${y+20}`} {...strokeProps} />
          <path d={`M${x-20} ${y} L${x-28} ${y}`} {...strokeProps} />
          <path d={`M${x-14} ${y-14} L${x-20} ${y-20}`} {...strokeProps} />
          
          {/* Shorter rays between main rays */}
          <path d={`M${x+10} ${y-17} L${x+14} ${y-24}`} {...strokeProps} />
          <path d={`M${x+17} ${y-10} L${x+24} ${y-14}`} {...strokeProps} />
          <path d={`M${x+17} ${y+10} L${x+24} ${y+14}`} {...strokeProps} />
          <path d={`M${x+10} ${y+17} L${x+14} ${y+24}`} {...strokeProps} />
          <path d={`M${x-10} ${y+17} L${x-14} ${y+24}`} {...strokeProps} />
          <path d={`M${x-17} ${y+10} L${x-24} ${y+14}`} {...strokeProps} />
          <path d={`M${x-17} ${y-10} L${x-24} ${y-14}`} {...strokeProps} />
          <path d={`M${x-10} ${y-17} L${x-14} ${y-24}`} {...strokeProps} />
          
          {/* Sun face */}
          <circle cx={x-5} cy={y-3} r="2" {...strokeProps} />
          <circle cx={x+5} cy={y-3} r="2" {...strokeProps} />
          <path d={`M${x-6} ${y+6} Q${x} ${y+10} ${x+6} ${y+6}`} {...strokeProps} />
        </g>
      );

    case 'butterfly':
      return (
        <g key={`butterfly-${Date.now()}-${Math.random()}`}>
          {/* Butterfly body */}
          <path d={`M${x} ${y-15} Q${x+1} ${y-10} ${x} ${y-5} Q${x-1} ${y} ${x} ${y+5} Q${x+1} ${y+10} ${x} ${y+15}`} {...strokeProps} />
          
          {/* Antennae */}
          <path d={`M${x-1} ${y-14} Q${x-3} ${y-18} ${x-2} ${y-20}`} {...strokeProps} />
          <path d={`M${x+1} ${y-14} Q${x+3} ${y-18} ${x+2} ${y-20}`} {...strokeProps} />
          <circle cx={x-2} cy={y-20} r="1" {...strokeProps} />
          <circle cx={x+2} cy={y-20} r="1" {...strokeProps} />
          
          {/* Upper wings */}
          <path d={`M${x-2} ${y-10} Q${x-15} ${y-15} ${x-18} ${y-8} Q${x-20} ${y-2} ${x-15} ${y+2} Q${x-8} ${y+5} ${x-2} ${y-2}`} {...strokeProps} />
          <path d={`M${x+2} ${y-10} Q${x+15} ${y-15} ${x+18} ${y-8} Q${x+20} ${y-2} ${x+15} ${y+2} Q${x+8} ${y+5} ${x+2} ${y-2}`} {...strokeProps} />
          
          {/* Lower wings */}
          <path d={`M${x-2} ${y+2} Q${x-12} ${y+8} ${x-15} ${y+12} Q${x-12} ${y+16} ${x-8} ${y+14} Q${x-4} ${y+12} ${x-2} ${y+8}`} {...strokeProps} />
          <path d={`M${x+2} ${y+2} Q${x+12} ${y+8} ${x+15} ${y+12} Q${x+12} ${y+16} ${x+8} ${y+14} Q${x+4} ${y+12} ${x+2} ${y+8}`} {...strokeProps} />
          
          {/* Wing patterns */}
          <circle cx={x-10} cy={y-5} r="2" {...strokeProps} />
          <circle cx={x+10} cy={y-5} r="2" {...strokeProps} />
          <circle cx={x-8} cy={y+8} r="1.5" {...strokeProps} />
          <circle cx={x+8} cy={y+8} r="1.5" {...strokeProps} />
        </g>
      );

    default:
      return (
        <circle
          key={`default-${Date.now()}-${Math.random()}`}
          cx={x}
          cy={y}
          r="10"
          {...strokeProps}
        />
      );
  }
};