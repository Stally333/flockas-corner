import { useState } from 'react'

export default function SettingsPanel() {
  const [settings, setSettings] = useState({
    soundEffects: true,
    music: true,
    notifications: true,
    darkMode: true,
    autoRoll: false
  })

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-yellow-500/10 p-4">
      <h3 className="text-yellow-500 text-sm font-medium mb-4">Game Settings</h3>
      <div className="space-y-3">
        {Object.entries(settings).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <span className="text-gray-300 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </span>
            <button
              onClick={() => setSettings(prev => ({...prev, [key]: !value}))}
              className={`w-12 h-6 rounded-full transition-colors relative
                ${value ? 'bg-yellow-500' : 'bg-gray-600'}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform
                ${value ? 'left-7' : 'left-1'}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
} 