interface PlayerCardProps {
  player: {
    id: string
    name: string
    tokens: number
    winStreak: number
    avatar?: string
    isCurrentPlayer: boolean
  }
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className={`bg-black/40 rounded-xl p-4 backdrop-blur transition-all ${
      player.isCurrentPlayer ? 'ring-2 ring-yellow-500/50' : ''
    }`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold">
            {player.avatar || player.name[0]}
          </div>
          {player.winStreak > 1 && (
            <div className="absolute -top-2 -right-2 bg-green-500 text-xs text-black font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {player.winStreak}
            </div>
          )}
        </div>
        <div>
          <div className="text-white font-bold flex items-center gap-2">
            {player.name}
            {player.isCurrentPlayer && (
              <span className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded-full">
                Current Turn
              </span>
            )}
          </div>
          <div className="text-yellow-500 text-sm">{player.tokens.toFixed(2)} Tokens</div>
        </div>
      </div>
      {/* Rest of the player card content */}
    </div>
  )
} 