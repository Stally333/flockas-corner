export default function QuickActions() {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm rounded-full px-6 py-2 border border-yellow-500/10">
      <div className="flex gap-6">
        <button className="text-yellow-500 hover:text-yellow-400 transition-colors">
          <span className="text-sm">Quick Bet (1x)</span>
        </button>
        <button className="text-yellow-500 hover:text-yellow-400 transition-colors">
          <span className="text-sm">Double Down</span>
        </button>
        <button className="text-yellow-500 hover:text-yellow-400 transition-colors">
          <span className="text-sm">All In</span>
        </button>
      </div>
    </div>
  )
} 