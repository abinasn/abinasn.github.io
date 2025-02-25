import { useTheme } from "../hooks/theme";

export function Background() {
  const { theme } = useTheme();

  return (
    <div>
      <div className={`absolute top-16 right-8 animate-texts`}>
        <div className="max-w-xs backdrop-blur-sm bg-black/5 dark:bg-white/5 rounded-md border border-slate-200/20 dark:border-slate-700/20 p-3 shadow-lg opacity-20 cursor-pointer hover:opacity-100 overflow-hidden">
          <pre className="text-xs text-slate-600 dark:text-slate-300">
            <code>{`function ThemeProvider() {
  const [theme, setTheme] = useState('${theme}');
  return(
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}`}</code>
          </pre>
        </div>
      </div>

      <div className={`absolute bottom-1 right-1 md:bottom-42 md:right-42 animate-texts`}>
        <div className="max-w-xs backdrop-blur-sm bg-black/5 dark:bg-white/5 rounded-md border border-slate-200/20 dark:border-slate-700/20 p-3 shadow-lg opacity-20 cursor-pointer hover:opacity-100 overflow-hidden">
          <pre className="text-xs text-slate-600 dark:text-slate-300">
            <code>{`const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n < 2) return n;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}


export function BackgroundIllustration() {
  const generateRandomShapes = (count: number) => {
    const shapes = [];
    
    for (let i = 0; i < count; i++) {
      const type = ["circle", "square", "triangle", "rect"][Math.floor(Math.random() * 4)];
      const x = Math.random() * 100; // % position
      const y = Math.random() * 100; // % position
      const size = Math.random() * 10;
      const hue = Math.floor(Math.random() * 360);
      
      shapes.push({
        id: i,
        type,
        x: `${x}%`,
        y: `${y}%`,
        size,
        fill: `hsla(${hue}, 70%, 60%, 0.2)`,
      });
    }
    
    return shapes;
  };

  const shapes = generateRandomShapes(20);



  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 backdrop-blur-[100px]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {shapes.map((shape) => (
            shape.type === "circle" ? (
              <circle
                key={shape.id}
                cx={shape.x}
                cy={shape.y}
                r={shape.size}
                fill={shape.fill}
              />
            ) : (
              <rect
                key={shape.id}
                x={shape.x}
                y={shape.y}
                width={shape.size}
                height={shape.size}
                fill={shape.fill}
                rx="20"
                ry="20"
              />
            )
          ))}
        </svg>
      </div>
    </div>
  );
}