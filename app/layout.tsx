import React from 'react'
import './globals.css'
import DiceIcon from '@/components/DiceIcon'

export const metadata = {
  title: 'Cee-lo Game',
  description: 'A classic dice game of chance',
}

// Add these button styles
const iconButtonStyles = {
  trophy: "bg-gradient-to-br from-yellow-600/20 to-yellow-500/10",
  settings: "bg-gradient-to-br from-blue-600/20 to-blue-500/10",
  help: "bg-gradient-to-br from-purple-600/20 to-purple-500/10"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen relative">
        {/* Background Image Layer */}
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: "url('/atlanta-skyline.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-[#1a1a1a]/95" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          <header className="w-full bg-black/40 backdrop-blur-sm border-b border-yellow-500/10 relative z-20">
            <div className="max-w-[1200px] mx-auto py-3 px-6 flex justify-between items-center">
              <h1 className="flex items-center gap-3">
                <span className="text-4xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 text-transparent bg-clip-text">
                  CEE-LO
                </span>
                <DiceIcon />
              </h1>
              
              {/* Enhanced Header Controls */}
              <div className="flex gap-3">
                <button 
                  className={`p-2.5 rounded-lg border border-yellow-500/20 text-yellow-500 
                    ${iconButtonStyles.trophy}
                    hover:scale-110 hover:border-yellow-500/40 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]
                    transition-all duration-300 ease-out`}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    🏆
                  </div>
                </button>
                <button 
                  className={`p-2.5 rounded-lg border border-blue-500/20 text-blue-500 
                    ${iconButtonStyles.settings}
                    hover:scale-110 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
                    transition-all duration-300 ease-out`}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    ⚙️
                  </div>
                </button>
                <button 
                  className={`p-2.5 rounded-lg border border-purple-500/20 text-purple-500 
                    ${iconButtonStyles.help}
                    hover:scale-110 hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]
                    transition-all duration-300 ease-out`}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    ❔
                  </div>
                </button>
              </div>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
} 