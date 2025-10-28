export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 400 90" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Victoria's Glow by Agus"
      style={{ 
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision'
      }}
    >
      <defs>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300&display=swap');
            .logo-text {
              font-family: 'Great Vibes', cursive;
              font-size: 42px;
              letter-spacing: 0.02em;
              fill: white;
              filter: drop-shadow(0 0 3px #E91E63) 
                      drop-shadow(0 0 6px #E91E63) 
                      drop-shadow(1px 1px 2px #C2185B);
            }
            .by-text {
              font-family: 'Poppins', sans-serif;
              font-size: 12px;
              font-weight: 300;
              letter-spacing: 0.1em;
              fill: white;
              filter: drop-shadow(0 0 2px #E91E63) 
                      drop-shadow(0 0 4px #E91E63) 
                      drop-shadow(1px 1px 1px #C2185B);
            }
          `}
        </style>
      </defs>
      
      {/* Texto principal */}
      <text x="200" y="50" textAnchor="middle" className="logo-text">
        Victoria's Glow
      </text>
      
      {/* Subtexto */}
      <text x="200" y="70" textAnchor="middle" className="by-text">
        by: Agus
      </text>
    </svg>
  );
}
