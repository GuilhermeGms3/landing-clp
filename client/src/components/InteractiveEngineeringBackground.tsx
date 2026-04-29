/*
Design philosophy for this file: Futurismo infraestrutural.
O fundo deve sugerir visualização paramétrica e inteligência técnica, com movimento controlado e resposta suave ao cursor.
Evite ruído exagerado; priorize profundidade, precisão e atmosfera low-key.
*/
import { useEffect, useMemo, useState } from "react";

const nodes = [
  { id: 1, x: 12, y: 18, size: 6, delay: "0s" },
  { id: 2, x: 26, y: 30, size: 4, delay: "1.3s" },
  { id: 3, x: 38, y: 16, size: 5, delay: "2.2s" },
  { id: 4, x: 52, y: 34, size: 4, delay: "0.8s" },
  { id: 5, x: 67, y: 22, size: 5, delay: "1.8s" },
  { id: 6, x: 82, y: 38, size: 6, delay: "2.8s" },
  { id: 7, x: 18, y: 58, size: 5, delay: "0.4s" },
  { id: 8, x: 36, y: 68, size: 4, delay: "2.6s" },
  { id: 9, x: 58, y: 62, size: 6, delay: "1.5s" },
  { id: 10, x: 76, y: 72, size: 5, delay: "3.1s" },
  { id: 11, x: 88, y: 54, size: 4, delay: "1.1s" },
  { id: 12, x: 46, y: 84, size: 5, delay: "2.1s" },
];

const links = [
  [1, 2],
  [2, 3],
  [2, 7],
  [3, 4],
  [4, 5],
  [5, 6],
  [4, 8],
  [5, 9],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [8, 12],
  [9, 12],
];

export function InteractiveEngineeringBackground() {
  const [pointer, setPointer] = useState({ x: 50, y: 36 });

  useEffect(() => {
    const updatePointer = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setPointer({ x, y });
    };

    window.addEventListener("mousemove", updatePointer);

    return () => {
      window.removeEventListener("mousemove", updatePointer);
    };
  }, []);

  const lineElements = useMemo(
    () =>
      links.map(([startId, endId], index) => {
        const start = nodes.find((node) => node.id === startId);
        const end = nodes.find((node) => node.id === endId);

        if (!start || !end) return null;

        return (
          <line
            key={`${startId}-${endId}`}
            x1={`${start.x}%`}
            y1={`${start.y}%`}
            x2={`${end.x}%`}
            y2={`${end.y}%`}
            stroke="rgba(148, 163, 184, 0.22)"
            strokeWidth="1"
            strokeDasharray={index % 2 === 0 ? "10 8" : "4 8"}
          />
        );
      }),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 transition-transform duration-500"
        style={{
          transform: `translate(${(pointer.x - 50) * 0.08}px, ${(pointer.y - 50) * 0.08}px) scale(1.03)`,
        }}
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-70"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="engineering-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.18)" />
              <stop offset="48%" stopColor="rgba(37,99,235,0.30)" />
              <stop offset="100%" stopColor="rgba(30,64,175,0.22)" />
            </linearGradient>
            <radialGradient id="engineering-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(96,165,250,0.34)" />
              <stop offset="60%" stopColor="rgba(59,130,246,0.14)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
            </radialGradient>
          </defs>

          <g stroke="url(#engineering-line)">{lineElements}</g>

          {nodes.map((node) => (
            <g key={node.id}>
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.size * 1.8}
                fill="url(#engineering-glow)"
                className="node-pulse"
                style={{ animationDelay: node.delay }}
              />
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.size * 0.52}
                fill={node.id % 3 === 0 ? "rgba(147,197,253,0.92)" : "rgba(191,219,254,0.96)"}
              />
            </g>
          ))}
        </svg>
      </div>

      <div
        className="absolute h-72 w-72 rounded-full bg-blue-400/18 blur-3xl transition-all duration-300"
        style={{
          left: `calc(${pointer.x}% - 9rem)`,
          top: `calc(${pointer.y}% - 9rem)`,
        }}
      />

      <div className="absolute -left-12 top-24 h-80 w-80 rounded-full bg-blue-500/14 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/14 blur-3xl" />
    </div>
  );
}
