// Professional coloring book shape generators
export const generateShape = (
  type: string,
  x: number,
  y: number,
  size: number = 1
): JSX.Element => {
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
        <g key={`tree-${Date.now()}-${Math.random()}`} transform={`translate(${x},${y}) scale(${size}) translate(${-x},${-y})`}>
          {/* Tronco Van Gogh */}
          <path
            d={`M${x-6} ${y+18} Q${x-4} ${y+8} ${x} ${y+10} Q${x+4} ${y+8} ${x+6} ${y+18} Q${x+3} ${y+25} ${x-3} ${y+25} Z`}
            {...strokeProps}
          />
          {/* Copa Van Gogh cerrada */}
          <path
            d={`M${x-20} ${y+5} Q${x-30} ${y-15} ${x-10} ${y-25} Q${x} ${y-35} ${x+10} ${y-25} Q${x+30} ${y-15} ${x+20} ${y+5} Q${x+25} ${y+20} ${x} ${y+15} Q${x-25} ${y+20} ${x-20} ${y+5} Z`}
            {...strokeProps}
          />
          {/* Detalle interior Van Gogh */}
          <path
            d={`M${x-10} ${y-5} Q${x} ${y-15} ${x+10} ${y-5} Q${x} ${y+5} ${x-10} ${y-5} Z`}
            {...strokeProps}
          />
        </g>
      );

    case 'flower':
      return (
        <g key={`flower-${Date.now()}-${Math.random()}`} transform={`translate(${x},${y}) scale(${size}) translate(${-x},${-y})`}>
          {/* Tallo Van Gogh */}
          <path
            d={`M${x} ${y+10} Q${x-2} ${y+25} ${x+2} ${y+40} Q${x-2} ${y+55} ${x} ${y+70}`}
            {...strokeProps}
          />
          {/* Hojas cerradas Van Gogh */}
          <path
            d={`M${x-8} ${y+30} Q${x-18} ${y+35} ${x-10} ${y+45} Q${x-2} ${y+40} ${x-8} ${y+30} Z`}
            {...strokeProps}
          />
          <path
            d={`M${x+8} ${y+38} Q${x+18} ${y+43} ${x+10} ${y+53} Q${x+2} ${y+48} ${x+8} ${y+38} Z`}
            {...strokeProps}
          />
          {/* Pétalos Van Gogh cerrados */}
          {[0, 1, 2, 3, 4, 5].map(i => {
            const angle = (Math.PI * 2 * i) / 6;
            const px = x + Math.cos(angle) * 14;
            const py = y - 10 + Math.sin(angle) * 14;
            return (
              <path
                key={i}
                d={`M${x} ${y-10} Q${(x+px)/2} ${(y-10+py)/2-8} ${px} ${py} Q${(x+px)/2} ${(y-10+py)/2+8} ${x} ${y-10} Z`}
                {...strokeProps}
              />
            );
          })}
          {/* Centro Van Gogh */}
          <ellipse cx={x} cy={y-10} rx="6" ry="6" {...strokeProps} />
        </g>
      );

    case 'house':
      return (
        <g key={`house-${Date.now()}-${Math.random()}`} transform={`translate(${x},${y}) scale(${size}) translate(${-x},${-y})`}>
          {/* Base Van Gogh */}
          <path
            d={`M${x-20} ${y+10} Q${x-25} ${y+25} ${x-10} ${y+30} Q${x} ${y+35} ${x+10} ${y+30} Q${x+25} ${y+25} ${x+20} ${y+10} Z`}
            {...strokeProps}
          />
          {/* Tejado Van Gogh */}
          <path
            d={`M${x-25} ${y+10} Q${x} ${y-20} ${x+25} ${y+10} Z`}
            {...strokeProps}
          />
          {/* Puerta cerrada */}
          <rect x={x-5} y={y+20} width="10" height="10" {...strokeProps} />
          {/* Ventana cerrada */}
          <rect x={x+8} y={y+15} width="7" height="7" {...strokeProps} />
          {/* Ventana circular */}
          <ellipse cx={x-10} cy={y+15} rx="4" ry="4" {...strokeProps} />
        </g>
      );

    case 'bridge':
      return (
        <g key={`bridge-${Date.now()}-${Math.random()}`} transform={`translate(${x},${y}) scale(${size}) translate(${-x},${-y})`}>
          {/* Arco Van Gogh cerrado */}
          <path
            d={`M${x-25} ${y+10} Q${x} ${y-10} ${x+25} ${y+10} Q${x} ${y+20} ${x-25} ${y+10} Z`}
            {...strokeProps}
          />
          {/* Tabla superior */}
          <path
            d={`M${x-20} ${y+8} Q${x} ${y-2} ${x+20} ${y+8} Q${x} ${y+12} ${x-20} ${y+8} Z`}
            {...strokeProps}
          />
          {/* Agua debajo Van Gogh */}
          <path
            d={`M${x-30} ${y+18} Q${x-10} ${y+25} ${x+10} ${y+18} Q${x+30} ${y+25} ${x+30} ${y+18} Q${x} ${y+30} ${x-30} ${y+18} Z`}
            {...strokeProps}
          />
        </g>
      );

    case 'cloud':
      return (
        <g key={`cloud-${Date.now()}-${Math.random()}`} transform={`translate(${x},${y}) scale(${size}) translate(${-x},${-y})`}>
          {/* Nube Van Gogh cerrada */}
          <path
            d={`M${x-18} ${y+2} Q${x-25} ${y-10} ${x-10} ${y-12} Q${x-5} ${y-20} ${x+8} ${y-15} Q${x+18} ${y-10} ${x+15} ${y+2} Q${x+22} ${y+10} ${x} ${y+10} Q${x-22} ${y+10} ${x-18} ${y+2} Z`}
            {...strokeProps}
          />
          {/* Detalle interior */}
          <path
            d={`M${x-8} ${y} Q${x} ${y-8} ${x+8} ${y} Q${x} ${y+6} ${x-8} ${y} Z`}
            {...strokeProps}
          />
        </g>
      );

    case 'grass':
      return (
        <g key={`grass-${Date.now()}-${Math.random()}`} transform={`translate(${x},${y}) scale(${size}) translate(${-x},${-y})`}>
          {/* Pasto Van Gogh cerrado */}
          <path
            d={`M${x-15} ${y+10} Q${x-10} ${y-5} ${x-5} ${y+10} Q${x} ${y-5} ${x+5} ${y+10} Q${x+10} ${y-5} ${x+15} ${y+10} Q${x} ${y+20} ${x-15} ${y+10} Z`}
            {...strokeProps}
          />
          {/* Detalle interior */}
          <path
            d={`M${x-7} ${y+8} Q${x} ${y} ${x+7} ${y+8} Q${x} ${y+12} ${x-7} ${y+8} Z`}
            {...strokeProps}
          />
        </g>
      );

    case 'sun':
      return (
        <g key={`sun-${Date.now()}-${Math.random()}`} transform={`translate(${x},${y}) scale(${size}) translate(${-x},${-y})`}>
          {/* Sol Van Gogh cerrado */}
          <ellipse cx={x} cy={y} rx="15" ry="15" {...strokeProps} />
          {/* Rayos Van Gogh cerrados */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
            const angle = (Math.PI * 2 * i) / 8;
            const r1 = 18, r2 = 25;
            const x1 = x + Math.cos(angle) * r1;
            const y1 = y + Math.sin(angle) * r1;
            const x2 = x + Math.cos(angle) * r2;
            const y2 = y + Math.sin(angle) * r2;
            return (
              <path
                key={i}
                d={`M${x1} ${y1} Q${(x1+x2)/2} ${(y1+y2)/2+4} ${x2} ${y2} Q${(x1+x2)/2} ${(y1+y2)/2-4} ${x1} ${y1} Z`}
                {...strokeProps}
              />
            );
          })}
          {/* Detalle interior */}
          <ellipse cx={x} cy={y} rx="7" ry="7" {...strokeProps} />
        </g>
      );

    case 'butterfly':
      return (
        <g key={`butterfly-${Date.now()}-${Math.random()}`} transform={`translate(${x},${y}) scale(${size}) translate(${-x},${-y})`}>
          {/* Cuerpo Van Gogh */}
          <ellipse cx={x} cy={y} rx="3" ry="12" {...strokeProps} />
          {/* Alas superiores Van Gogh cerradas */}
          <path
            d={`M${x-3} ${y-5} Q${x-20} ${y-25} ${x-25} ${y-5} Q${x-28} ${y+15} ${x-8} ${y+10} Q${x-2} ${y+8} ${x-3} ${y-5} Z`}
            {...strokeProps}
          />
          <path
            d={`M${x+3} ${y-5} Q${x+20} ${y-25} ${x+25} ${y-5} Q${x+28} ${y+15} ${x+8} ${y+10} Q${x+2} ${y+8} ${x+3} ${y-5} Z`}
            {...strokeProps}
          />
          {/* Alas inferiores Van Gogh cerradas */}
          <path
            d={`M${x-3} ${y+5} Q${x-18} ${y+20} ${x-10} ${y+25} Q${x-2} ${y+18} ${x-3} ${y+5} Z`}
            {...strokeProps}
          />
          <path
            d={`M${x+3} ${y+5} Q${x+18} ${y+20} ${x+10} ${y+25} Q${x+2} ${y+18} ${x+3} ${y+5} Z`}
            {...strokeProps}
          />
          {/* Antenas */}
          <path d={`M${x-1} ${y-12} Q${x-5} ${y-18} ${x-3} ${y-22}`} {...strokeProps} />
          <path d={`M${x+1} ${y-12} Q${x+5} ${y-18} ${x+3} ${y-22}`} {...strokeProps} />
        </g>
      );

    case 'abstract-landscape':
      return (
        <g key={`landscape-${Date.now()}-${Math.random()}`} transform={`translate(${x},${y}) scale(${size}) translate(${-x},${-y})`}>
          {/* Montaña cerrada */}
          <path
            d={`M${x-30} ${y+20} Q${x-15} ${y-20} ${x} ${y+10} Q${x+15} ${y-10} ${x+30} ${y+20} Z`}
            {...strokeProps}
          />
          {/* Sol cerrado */}
          <ellipse
            cx={x+20}
            cy={y-10}
            rx="8"
            ry="8"
            {...strokeProps}
          />
          {/* Campo cerrado */}
          <path
            d={`M${x-30} ${y+20} Q${x-15} ${y+30} ${x} ${y+25} Q${x+15} ${y+35} ${x+30} ${y+20} Q${x} ${y+30} ${x-30} ${y+20} Z`}
            {...strokeProps}
          />
          {/* Nube cerrada */}
          <path
            d={`M${x-10} ${y-10} Q${x-15} ${y-15} ${x-5} ${y-18} Q${x} ${y-22} ${x+8} ${y-18} Q${x+15} ${y-15} ${x+10} ${y-10} Q${x+5} ${y-7} ${x-10} ${y-10} Z`}
            {...strokeProps}
          />
        </g>
      );

    case 'abstract-mountains':
      return (
        <g key={`mountains-${Date.now()}-${Math.random()}`} transform={`translate(${x},${y}) scale(${size}) translate(${-x},${-y})`}>
          {/* Montañas superpuestas cerradas */}
          <path d={`M${x-40} ${y+20} L${x-20} ${y-30} L${x} ${y+10} L${x+20} ${y-25} L${x+40} ${y+20} Z`} {...strokeProps} />
          <path d={`M${x-30} ${y+20} Q${x-10} ${y-10} ${x+10} ${y+20} Q${x+20} ${y+30} ${x-30} ${y+20} Z`} {...strokeProps} />
        </g>
      );
    case 'abstract-fields':
      return (
        <g key={`fields-${Date.now()}-${Math.random()}`} transform={`translate(${x},${y}) scale(${size}) translate(${-x},${-y})`}>
          {/* Campos curvos cerrados */}
          <path d={`M${x-40} ${y+30} Q${x-20} ${y+10} ${x} ${y+30} Q${x+20} ${y+50} ${x+40} ${y+30} Q${x+20} ${y+70} ${x-40} ${y+30} Z`} {...strokeProps} />
          <path d={`M${x-30} ${y+40} Q${x-10} ${y+25} ${x+10} ${y+40} Q${x+20} ${y+55} ${x-30} ${y+40} Z`} {...strokeProps} />
        </g>
      );
    case 'abstract-swirls':
      return (
        <g key={`swirls-${Date.now()}-${Math.random()}`} transform={`translate(${x},${y}) scale(${size}) translate(${-x},${-y})`}>
          {/* Remolino cerrado tipo Van Gogh */}
          <path d={`M${x} ${y} 
            Q${x+10} ${y-20} ${x+30} ${y-10} 
            Q${x+50} ${y+10} ${x+30} ${y+30} 
            Q${x+10} ${y+50} ${x-10} ${y+30} 
            Q${x-30} ${y+10} ${x} ${y} Z`} {...strokeProps} />
          {/* Segundo remolino */}
          <path d={`M${x+10} ${y+10} 
            Q${x+20} ${y} ${x+30} ${y+10} 
            Q${x+40} ${y+20} ${x+30} ${y+30} 
            Q${x+20} ${y+40} ${x+10} ${y+30} 
            Q${x} ${y+20} ${x+10} ${y+10} Z`} {...strokeProps} />
        </g>
      );

    case 'background-aurora':
      return (
        <g key={`aurora-${Date.now()}-${Math.random()}`} transform={`translate(${x},${y}) scale(${size}) translate(${-x},${-y})`}>
          {/* Aurora boreal: líneas curvas cerradas */}
          <path
            d={`M${x-60} ${y+40} Q${x-30} ${y-10} ${x} ${y+30} Q${x+30} ${y+70} ${x+60} ${y+40} Q${x+30} ${y+60} ${x} ${y+50} Q${x-30} ${y+60} ${x-60} ${y+40} Z`}
            {...strokeProps}
          />
          {/* Luna grande cerrada */}
          <ellipse cx={x+40} cy={y-20} rx="18" ry="18" {...strokeProps} />
          {/* Nubes cerradas */}
          <path
            d={`M${x-30} ${y+10} Q${x-40} ${y} ${x-20} ${y-5} Q${x-10} ${y-15} ${x} ${y-5} Q${x+10} ${y} ${x-10} ${y+10} Q${x-20} ${y+15} ${x-30} ${y+10} Z`}
            {...strokeProps}
          />
        </g>
      );

    case 'background-sea':
      // Mar con olas en la parte inferior
      return (
        <g key={`sea-${Date.now()}-${Math.random()}`}>
          <path
            d={`
              M 0 370
              Q 60 360, 120 380
              Q 180 400, 240 380
              Q 300 360, 360 380
              Q 420 400, 480 380
              Q 540 360, 600 370
              L 600 400 L 0 400 Z
            `}
            {...strokeProps}
          />
        </g>
      );

    case 'background-stars':
      // Noche estrellada Van Gogh
      return (
        <g key={`stars-${Date.now()}-${Math.random()}`}>
          {/* Cielo con líneas curvas */}
          <path
            d={`
              M 0 60 Q 150 20 300 60 Q 450 100 600 60
              M 0 100 Q 200 60 400 100 Q 500 120 600 100
              M 0 140 Q 100 120 300 140 Q 500 160 600 140
            `}
            {...strokeProps}
          />
          {/* Estrellas grandes */}
          {[60, 120, 200, 350, 420, 500, 570].map((cx, i) => (
            <ellipse key={i} cx={cx} cy={40 + (i % 2) * 20} rx="6" ry="6" {...strokeProps} />
          ))}
          {/* Estrellas pequeñas */}
          {[80, 160, 250, 320, 390, 480, 550].map((cx, i) => (
            <ellipse key={i} cx={cx} cy={70 + (i % 2) * 15} rx="2.5" ry="2.5" {...strokeProps} />
          ))}
          {/* Luna Van Gogh */}
          <ellipse cx={520} cy={50} rx="18" ry="18" {...strokeProps} />
        </g>
      );

    case 'background-dunes':
      // Dunas de desierto en la parte inferior
      return (
        <g key={`dunes-${Date.now()}-${Math.random()}`}>
          <path
            d={`
              M 0 340
              Q 100 320 200 360
              Q 300 400 400 360
              Q 500 320 600 340
              L 600 400 L 0 400 Z
            `}
            {...strokeProps}
          />
          <path
            d={`
              M 0 370
              Q 150 350 300 390
              Q 450 430 600 370
            `}
            {...strokeProps}
          />
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