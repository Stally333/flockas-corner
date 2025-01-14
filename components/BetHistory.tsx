export default function BetHistory() {
  return (
    <div className="bg-black/40 rounded-xl p-3 backdrop-blur">
      <h3 className="text-yellow-500 text-xs font-medium mb-2">Recent Bets</h3>
      <div className="space-y-2">
        {[
          { amount: 100, multiplier: '2x', result: 'win' },
          { amount: 50, multiplier: '1.5x', result: 'loss' },
          { amount: 200, multiplier: '1x', result: 'win' },
        ].map((bet, i) => (
          <div key={i} className="flex items-center justify-between text-xs">
            <span className={bet.result === 'win' ? 'text-green-500' : 'text-red-500'}>
              {bet.amount.toFixed(2)}
            </span>
            <span className="text-gray-400">{bet.multiplier}</span>
            <span className={`${
              bet.result === 'win' ? 'text-green-500' : 'text-red-500'
            } font-medium`}>
              {bet.result === 'win' ? '+' : '-'}{(bet.amount * parseFloat(bet.multiplier)).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
} 