export interface Player {
  id: string
  name: string
  tokens: number
  currentBet: number
  diceRoll: number[]
  hasRolled: boolean
  status: 'waiting' | 'rolling' | 'done'
}

export interface GameState {
  players: Player[]
  pot: number
  currentPlayer: number
  gameStatus: 'waiting' | 'betting' | 'rolling' | 'finished'
  minBet: number
}

export interface Toast {
  message: string
  type: 'success' | 'error' | 'info'
}

export interface GameSettings {
  soundEffects: boolean
  music: boolean
  notifications: boolean
  darkMode: boolean
  autoRoll: boolean
} 