interface WakaMessageProps {
  message: string
}

export default function WakaMessage({ message }: WakaMessageProps) {
  return (
    <div className="absolute -right-40 top-28 w-48">
      <div className="relative">
        {/* Outer glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl blur-sm" />
        
        {/* Main message bubble */}
        <div className="relative bg-gradient-to-br from-black/95 to-black/90 backdrop-blur-md rounded-xl border border-yellow-500/30 p-4 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
          {/* Luxury accent line */}
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
          
          {/* Enhanced arrow pointing to Waka */}
          <div className="absolute -left-2.5 top-1/2 -translate-y-1/2">
            <div className="relative w-3 h-3 rotate-45 bg-gradient-to-br from-black/95 to-black/90 border-l border-b border-yellow-500/30" />
          </div>
          
          {/* Message text with subtle glow */}
          <p className="relative text-sm font-medium italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-yellow-200 drop-shadow-[0_0_1px_rgba(234,179,8,0.3)]">
            "{message}"
          </p>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
        </div>
      </div>
    </div>
  )
} 