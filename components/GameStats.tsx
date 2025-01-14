export default function GameStats() {
  return (
    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-yellow-500/10 z-50 w-44">
      <h3 className="text-yellow-500 text-xs font-medium mb-2">Game Stats</h3>
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Total Games</span>
          <span className="text-white font-medium">24</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Win Rate</span>
          <span className="text-green-500 font-medium">64%</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Biggest Win</span>
          <span className="text-yellow-500 font-medium">1,450.00</span>
        </div>
      </div>
    </div>
  )
} 