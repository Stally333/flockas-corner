export default function PlayerStats() {
  return (
    <div className="bg-black/40 rounded-xl p-3 backdrop-blur">
      <h3 className="text-yellow-500 text-xs font-medium mb-2">Your Stats</h3>
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Win Rate</span>
          <span className="text-green-500 font-medium">64%</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Biggest Win</span>
          <span className="text-yellow-500 font-medium">1,450.00</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Current Streak</span>
          <span className="text-blue-400 font-medium">3 Wins</span>
        </div>
      </div>
    </div>
  )
} 