import { useState } from 'react'

export default function SoundControls() {
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.8)

  return (
    <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm rounded-lg border border-yellow-500/10 p-3">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="text-yellow-500 hover:text-yellow-400"
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-24 accent-yellow-500"
        />
      </div>
    </div>
  )
} 