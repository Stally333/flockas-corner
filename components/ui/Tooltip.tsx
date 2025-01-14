export default function Tooltip({ text, children }) {
  return (
    <div className="group relative">
      {children}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 rounded-lg text-xs text-white
        opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {text}
      </div>
    </div>
  )
} 