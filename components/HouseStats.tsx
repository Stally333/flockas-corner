export default function HouseStats() {
  return (
    <div className="bg-black/40 rounded-xl p-3 backdrop-blur">
      <h3 className="text-yellow-500 text-xs font-medium mb-2">Flocka's Corner Stats</h3>
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Total Volume</span>
          <span className="text-white font-medium">$1.2M</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Liquidity Pool</span>
          <span className="text-green-500 font-medium">$250K</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Active Players</span>
          <span className="text-blue-400 font-medium">142</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Games Today</span>
          <span className="text-purple-400 font-medium">1,450</span>
        </div>
      </div>
    </div>
  )
} 