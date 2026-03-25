import { motion } from "framer-motion";

// Animated network/nodes illustration for hero or tech sections
export const NetworkAnimation = ({ className = "" }: { className?: string }) => {
  const nodes = [
    { cx: 80, cy: 60, r: 6 },
    { cx: 200, cy: 40, r: 8 },
    { cx: 320, cy: 70, r: 5 },
    { cx: 140, cy: 140, r: 7 },
    { cx: 260, cy: 130, r: 6 },
    { cx: 60, cy: 200, r: 5 },
    { cx: 180, cy: 220, r: 9 },
    { cx: 340, cy: 190, r: 6 },
    { cx: 100, cy: 280, r: 7 },
    { cx: 280, cy: 270, r: 5 },
  ];

  const lines = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 4],
    [3, 5], [3, 6], [4, 7], [5, 8], [6, 8],
    [6, 9], [7, 9], [1, 6],
  ];

  return (
    <svg viewBox="0 0 400 320" className={className} fill="none">
      {/* Connection lines */}
      {lines.map(([a, b], i) => (
        <motion.line
          key={`line-${i}`}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="hsl(var(--primary))"
          strokeWidth={1}
          strokeOpacity={0.2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: i * 0.08, ease: "easeOut" }}
        />
      ))}

      {/* Traveling pulses on lines */}
      {lines.slice(0, 6).map(([a, b], i) => (
        <motion.circle
          key={`pulse-${i}`}
          r={2}
          fill="hsl(var(--primary))"
          opacity={0.6}
          initial={{ cx: nodes[a].cx, cy: nodes[a].cy }}
          animate={{
            cx: [nodes[a].cx, nodes[b].cx, nodes[a].cx],
            cy: [nodes[a].cy, nodes[b].cy, nodes[a].cy],
          }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <motion.circle
            cx={node.cx} cy={node.cy} r={node.r * 2.5}
            fill="hsl(var(--primary))"
            opacity={0.06}
            animate={{ r: [node.r * 2.5, node.r * 3.5, node.r * 2.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
          />
          <motion.circle
            cx={node.cx} cy={node.cy} r={node.r}
            fill="hsl(var(--primary))"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
          />
          <motion.circle
            cx={node.cx} cy={node.cy} r={node.r * 0.4}
            fill="white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
          />
        </g>
      ))}
    </svg>
  );
};

// Animated shield/security illustration
export const ShieldAnimation = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 240" className={className} fill="none">
    <motion.path
      d="M100 20 L170 55 L170 120 Q170 190 100 220 Q30 190 30 120 L30 55 Z"
      stroke="hsl(var(--primary))"
      strokeWidth={2}
      fill="hsl(var(--primary))"
      fillOpacity={0.05}
      initial={{ pathLength: 0, fillOpacity: 0 }}
      animate={{ pathLength: 1, fillOpacity: 0.05 }}
      transition={{ duration: 2, ease: "easeOut" }}
    />
    <motion.path
      d="M100 50 L145 72 L145 115 Q145 165 100 185 Q55 165 55 115 L55 72 Z"
      stroke="hsl(var(--primary))"
      strokeWidth={1.5}
      strokeOpacity={0.3}
      fill="hsl(var(--primary))"
      fillOpacity={0.08}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
    {/* Checkmark */}
    <motion.path
      d="M78 120 L94 136 L126 100"
      stroke="hsl(var(--primary))"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    />
    {/* Pulse ring */}
    <motion.circle
      cx={100} cy={120} r={50}
      stroke="hsl(var(--primary))"
      strokeWidth={1}
      fill="none"
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0, 0.3] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </svg>
);

// Animated chart/analytics illustration
export const ChartAnimation = ({ className = "" }: { className?: string }) => {
  const bars = [
    { x: 30, height: 80 },
    { x: 70, height: 120 },
    { x: 110, height: 60 },
    { x: 150, height: 140 },
    { x: 190, height: 100 },
    { x: 230, height: 160 },
    { x: 270, height: 90 },
  ];

  return (
    <svg viewBox="0 0 320 220" className={className} fill="none">
      {/* Grid lines */}
      {[0, 1, 2, 3].map((i) => (
        <motion.line
          key={`grid-${i}`}
          x1={20} y1={40 + i * 45} x2={300} y2={40 + i * 45}
          stroke="hsl(var(--border))"
          strokeWidth={1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
        />
      ))}

      {/* Bars */}
      {bars.map((bar, i) => (
        <motion.rect
          key={`bar-${i}`}
          x={bar.x}
          width={24}
          rx={4}
          fill="hsl(var(--primary))"
          fillOpacity={0.15 + (i % 3) * 0.1}
          stroke="hsl(var(--primary))"
          strokeWidth={1}
          strokeOpacity={0.3}
          initial={{ y: 195, height: 0 }}
          animate={{ y: 195 - bar.height, height: bar.height }}
          transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
        />
      ))}

      {/* Trend line */}
      <motion.path
        d="M42 155 L82 115 L122 165 L162 95 L202 135 L242 75 L282 105"
        stroke="hsl(var(--primary))"
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
      />

      {/* Trend line dots */}
      {[
        { cx: 42, cy: 155 }, { cx: 82, cy: 115 }, { cx: 122, cy: 165 },
        { cx: 162, cy: 95 }, { cx: 202, cy: 135 }, { cx: 242, cy: 75 }, { cx: 282, cy: 105 },
      ].map((dot, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={dot.cx} cy={dot.cy} r={4}
          fill="hsl(var(--primary))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
        />
      ))}
    </svg>
  );
};

// Animated gear/process illustration
export const GearAnimation = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 240 240" className={className} fill="none">
    {/* Outer gear */}
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "120px 120px" }}
    >
      <circle cx={120} cy={120} r={70} stroke="hsl(var(--primary))" strokeWidth={2} strokeOpacity={0.2} />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 120 + 62 * Math.cos(angle);
        const y1 = 120 + 62 * Math.sin(angle);
        const x2 = 120 + 78 * Math.cos(angle);
        const y2 = 120 + 78 * Math.sin(angle);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--primary))" strokeWidth={6} strokeLinecap="round" strokeOpacity={0.2} />
        );
      })}
    </motion.g>

    {/* Inner gear - counter rotate */}
    <motion.g
      animate={{ rotate: -360 }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "120px 120px" }}
    >
      <circle cx={120} cy={120} r={40} stroke="hsl(var(--primary))" strokeWidth={1.5} strokeOpacity={0.3} />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 120 + 34 * Math.cos(angle);
        const y1 = 120 + 34 * Math.sin(angle);
        const x2 = 120 + 46 * Math.cos(angle);
        const y2 = 120 + 46 * Math.sin(angle);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--primary))" strokeWidth={4} strokeLinecap="round" strokeOpacity={0.3} />
        );
      })}
    </motion.g>

    {/* Center */}
    <motion.circle
      cx={120} cy={120} r={14}
      fill="hsl(var(--primary))"
      fillOpacity={0.1}
      stroke="hsl(var(--primary))"
      strokeWidth={2}
      strokeOpacity={0.4}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <circle cx={120} cy={120} r={5} fill="hsl(var(--primary))" fillOpacity={0.5} />
  </svg>
);

// Floating particles background
export const FloatingParticles = ({ className = "" }: { className?: string }) => {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    cx: Math.random() * 400,
    cy: Math.random() * 300,
    r: 1.5 + Math.random() * 2,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 3,
  }));

  return (
    <svg viewBox="0 0 400 300" className={className} fill="none">
      {particles.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.cx} cy={p.cy} r={p.r}
          fill="hsl(var(--primary))"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            cy: [p.cy, p.cy - 40, p.cy],
          }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
};
