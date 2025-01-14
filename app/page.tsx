import GameBoard from '@/components/GameBoard'

export default function Home() {
  return (
    <main className="h-[calc(100vh-64px)] text-white overflow-hidden flex items-center justify-center relative z-20">
      <div className="w-[1200px] h-[600px] bg-green-800/50 rounded-xl shadow-2xl backdrop-blur-sm">
        <div className="h-full flex items-center justify-center">
          <GameBoard />
        </div>
      </div>
    </main>
  )
} 