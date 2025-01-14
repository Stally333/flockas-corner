export default function RollHistory() {
  return (
    <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/10 w-48">
      <h3 className="text-yellow-500 text-sm font-medium mb-3">Recent Rolls</h3>
      <div className="space-y-2">
        {[
          { player: 'You', roll: [4, 5, 6], won: true },
          { player: 'P2', roll: [3, 3, 3], won: false },
          { player: 'You', roll: [2, 2, 2], won: false },
        ].map((roll, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <span className={`${roll.won ? 'text-green-500' : 'text-red-500'}`}>
              {roll.player}
            </span>
            <div className="flex gap-1">
              {roll.roll.map((num, j) => (
                <span key={j} className="w-5 h-5 bg-black/40 rounded flex items-center justify-center text-xs">
                  {num}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 