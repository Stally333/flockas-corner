export default function AchievementPopup({ title, description }) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-lg border border-yellow-500/20 p-4 flex items-center gap-4 animate-slide-down">
      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
        🏆
      </div>
      <div>
        <h4 className="text-yellow-500 font-medium">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  )
} 