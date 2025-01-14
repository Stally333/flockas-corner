export default function Toast({ message, type = 'success' }) {
  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-lg backdrop-blur-sm border border-yellow-500/10 animate-slide-up
      ${type === 'success' ? 'bg-green-500/20 text-green-500' : 
        type === 'error' ? 'bg-red-500/20 text-red-500' : 
        'bg-black/40 text-yellow-500'}`}>
      <p className="text-sm font-medium">{message}</p>
    </div>
  )
} 