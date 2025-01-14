export default function PlayerActionsMenu() {
  return (
    <div className="absolute top-4 right-4 z-40">
      <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-yellow-500/10 p-2">
        <div className="space-y-2">
          <button className="w-full px-4 py-2 text-sm text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-colors">
            View Stats
          </button>
          <button className="w-full px-4 py-2 text-sm text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-colors">
            Game Rules
          </button>
          <button className="w-full px-4 py-2 text-sm text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-colors">
            Settings
          </button>
          <button className="w-full px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
            Leave Game
          </button>
        </div>
      </div>
    </div>
  )
} 