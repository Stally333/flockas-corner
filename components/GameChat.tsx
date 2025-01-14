export default function GameChat() {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-yellow-500/10 w-64">
      <div className="p-3 border-b border-yellow-500/10">
        <h3 className="text-yellow-500 text-xs font-medium">Game Chat</h3>
      </div>
      <div className="h-48 overflow-y-auto p-3 space-y-2">
        {/* Chat messages */}
        <div className="text-xs">
          <span className="text-yellow-500 font-medium">Player 1: </span>
          <span className="text-gray-300">Good luck everyone!</span>
        </div>
      </div>
      <div className="p-3 border-t border-yellow-500/10">
        <input 
          type="text" 
          placeholder="Type a message..."
          className="w-full bg-black/40 rounded px-3 py-1.5 text-xs text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-yellow-500/50"
        />
      </div>
    </div>
  )
} 