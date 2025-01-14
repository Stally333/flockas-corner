export default function Spinner() {
  return (
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 border-2 border-yellow-500/20 rounded-full" />
      <div className="absolute inset-0 border-2 border-yellow-500 rounded-full border-t-transparent animate-spin" />
    </div>
  )
} 