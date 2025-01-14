'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Player, GameState } from '@/types/game'
import GameStats from './GameStats'
import RollHistory from './RollHistory'
import QuickActions from './QuickActions'
import PlayerStats from './PlayerStats'
import HouseStats from './HouseStats'
import BetHistory from './BetHistory'
import SoundControls from './ui/SoundControls'
import Leaderboard from './Leaderboard'
import SettingsPanel from './SettingsPanel'
import GameChat from './GameChat'
import Toast from './ui/Toast'
import TutorialOverlay from './TutorialOverlay'

export default function GameBoard() {
  const [gameState, setGameState] = useState<GameState>({
    players: [],
    pot: 0,
    currentPlayer: 0,
    gameStatus: 'waiting',
    minBet: 10,
    round: 1,
    totalRounds: 5
  })

  const [activeRoll, setActiveRoll] = useState({
    playerId: null,
    dice: [0, 0, 0],
    isRolling: false
  })

  const [showTutorial, setShowTutorial] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null)
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 shadow-2xl">
      {/* Add title text at the top */}
      <div className="absolute -top-28 left-0 right-0">
        {/* FLOCKA'S text */}
        <h1 className="absolute left-8 text-[85px] font-bold tracking-wider" style={{ 
          fontFamily: 'Arial Black, sans-serif',
          WebkitTextStroke: '2px white',
          WebkitTextFillColor: 'transparent',
          textShadow: `
            0 0 20px rgba(255, 255, 255, 0.1),
            0 0 40px rgba(255, 255, 255, 0.1),
            0 0 80px rgba(255, 255, 255, 0.1)
          `,
        }}>
          <span className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #A3A3A3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.3))'
          }}>
            FLOCKA'S
          </span>
        </h1>

        {/* CORNER text - moved to 58% from the left */}
        <h1 className="absolute left-[58%] text-[85px] font-bold tracking-wider" style={{ 
          fontFamily: 'Arial Black, sans-serif',
          WebkitTextStroke: '2px white',
          WebkitTextFillColor: 'transparent',
          textShadow: `
            0 0 20px rgba(255, 255, 255, 0.1),
            0 0 40px rgba(255, 255, 255, 0.1),
            0 0 80px rgba(255, 255, 255, 0.1)
          `,
        }}>
          <span className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #A3A3A3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.3))'
          }}>
            CORNER
          </span>
        </h1>
      </div>

      {/* Move Sound Controls even lower */}
      <div className="absolute bottom-0 left-0 -ml-4 z-50">
        <SoundControls />
      </div>

      {/* Move control buttons to top right of middle container */}
      <div className="grid grid-cols-[2fr_3fr_2fr] gap-6 h-full">
        {/* Left column */}
        <div className="space-y-4">
          <PlayerStats />
          <div className="bg-black/40 rounded-xl p-4 backdrop-blur">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold">
                YOU
              </div>
              <div>
                <div className="text-white font-bold">Player 1</div>
                <div className="text-yellow-500 text-sm">100.00 Tokens</div>
              </div>
            </div>

            <div className="bg-black/40 rounded-lg p-4 flex justify-center">
              <div className="flex gap-2">
                {[1,2,3].map((_, i) => (
                  <div key={i} className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-3xl font-bold shadow-lg">
                    ?
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black/40 rounded-xl p-4 backdrop-blur">
            <div className="text-gray-400 text-sm mb-2">Bet Amount</div>
            <div className="text-yellow-500 text-2xl font-bold mb-4">10.00</div>
            
            <div className="space-y-3">
              <input 
                type="range" 
                className="w-full appearance-none bg-neutral-700 h-2 rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-yellow-500"
              />
              
              <div className="flex justify-between text-xs text-gray-500">
                <span>Min</span>
                <span>0.5x</span>
                <span>1x</span>
                <span>2x</span>
                <span>Max</span>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 rounded-lg mt-4 hover:from-yellow-400 hover:to-yellow-500 transition-all">
                ROLL DICE
              </button>
            </div>
          </div>
        </div>

        {/* Center column */}
        <div className="flex flex-col items-center">
          {/* Dealer Avatar with adjusted positioning */}
          <div className="relative z-30">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80">
              <Image
                src="/waka-avatar.png"
                alt="Dealer"
                width={320}
                height={320}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Main Playing Field - Adjusted margin */}
          <div className="bg-black/40 rounded-3xl p-8 backdrop-blur-sm border border-yellow-500/10 mt-48 w-full">
            <div className="text-center mb-8">
              <div className="text-yellow-500 text-lg font-medium">ROUND {gameState.round}/{gameState.totalRounds}</div>
              <div className="text-4xl font-bold text-white mt-2">POT: 100.00</div>
            </div>

            {/* Active Rolling Area */}
            <div className="relative h-48 mb-8 bg-black/40 rounded-2xl border border-yellow-500/5">
              <div className="absolute inset-0 flex items-center justify-center">
                {activeRoll.isRolling ? (
                  <div className="flex gap-6 animate-bounce">
                    {activeRoll.dice.map((value, idx) => (
                      <div
                        key={idx}
                        className="w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-xl flex items-center justify-center text-4xl font-bold shadow-lg animate-spin"
                      >
                        {value || '?'}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-400 text-xl font-medium">
                    Waiting for next roll...
                  </div>
                )}
              </div>
            </div>

            {/* Score Display */}
            <div className="flex items-center justify-center gap-12">
              <div className="text-6xl font-digital text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">00</div>
              <div className="text-2xl text-gray-400 font-medium">VS</div>
              <div className="text-6xl font-digital text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">00</div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-3">
          <HouseStats />
          <BetHistory />
          {/* Other Players */}
          {[2,3,4].map(num => (
            <div key={num} className="bg-black/40 rounded-xl p-3 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-neutral-700 w-8 h-8 rounded-full flex items-center justify-center text-xs">
                    P{num}
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-300">Player {num}</div>
                    <div className="text-yellow-500 text-xs">100.00 Tokens</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1,2,3].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-white rounded flex items-center justify-center text-xs font-bold">
                      ?
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions - Adjusted positioning */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm rounded-full px-6 py-2 border border-yellow-500/10">
        <div className="flex gap-6">
          <button className="text-yellow-500 hover:text-yellow-400 transition-colors">
            <span className="text-sm">Quick Bet (1x)</span>
          </button>
          <button className="text-yellow-500 hover:text-yellow-400 transition-colors">
            <span className="text-sm">Double Down</span>
          </button>
          <button className="text-yellow-500 hover:text-yellow-400 transition-colors">
            <span className="text-sm">All In</span>
          </button>
        </div>
      </div>

      {/* Chat button - moved to bottom right */}
      <div className="absolute right-6 bottom-[0.75rem] z-50">
        <button
          onClick={() => setShowChat(!showChat)}
          className="p-2 bg-black/40 backdrop-blur-sm rounded-lg border border-yellow-500/10 text-yellow-500 hover:bg-yellow-500/10 hover:scale-110 transition-all duration-300 ease-out"
        >
          💬
        </button>
        {showChat && (
          <div className="absolute bottom-full right-0 mb-2">
            <GameChat />
          </div>
        )}
      </div>

      {/* Modals and Overlays */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative">
            <button
              onClick={() => setShowSettings(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full text-white text-sm flex items-center justify-center"
            >
              ✕
            </button>
            <SettingsPanel />
          </div>
        </div>
      )}

      {showLeaderboard && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative">
            <button
              onClick={() => setShowLeaderboard(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full text-white text-sm flex items-center justify-center"
            >
              ✕
            </button>
            <Leaderboard />
          </div>
        </div>
      )}

      {showTutorial && <TutorialOverlay onClose={() => setShowTutorial(false)} />}

      {/* Toast Notifications */}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  )
} 