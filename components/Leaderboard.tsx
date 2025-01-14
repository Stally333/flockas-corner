interface LeaderboardEntry {
  rank: number
  player: string
  wins: number
  totalWinnings: number
}

export default function Leaderboard() {
  const leaders: LeaderboardEntry[] = [
    { rank: 1, player: "WakaFlocka", wins: 156, totalWinnings: 25000 },
    { rank: 2, player: "DiceKing", wins: 142, totalWinnings: 22000 },
    { rank: 3, player: "LuckyRoller", wins: 128, totalWinnings: 20000 },
  ]

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-yellow-500/10 p-4">
      <h3 className="text-yellow-500 text-sm font-medium mb-3">Top Players</h3>
      <div className="space-y-2">
        {leaders.map((entry) => (
          <div key={entry.rank} className="flex items-center justify-between p-2 rounded-lg bg-black/20">
            <div className="flex items-center gap-3">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
                ${entry.rank === 1 ? 'bg-yellow-500 text-black' :
                  entry.rank === 2 ? 'bg-gray-400 text-black' :
                  'bg-yellow-700 text-white'}`}>
                {entry.rank}
              </span>
              <span className="text-white">{entry.player}</span>
            </div>
            <div className="text-right">
              <div className="text-yellow-500 text-sm">${entry.totalWinnings.toLocaleString()}</div>
              <div className="text-gray-400 text-xs">{entry.wins} wins</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 