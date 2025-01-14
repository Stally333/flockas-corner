import { useState } from 'react'

interface TutorialStep {
  title: string
  description: string
  target: string
}

export default function TutorialOverlay() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps: TutorialStep[] = [
    {
      title: "Place Your Bet",
      description: "Use the slider to set your bet amount",
      target: "bet-slider"
    },
    {
      title: "Roll the Dice",
      description: "Click the Roll button to throw your dice",
      target: "roll-button"
    },
    // Add more steps as needed
  ]

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50">
      <div className="absolute inset-0 pointer-events-none">
        {/* Highlight current tutorial target */}
        <div className="absolute" style={{
          // Position based on target element
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}>
          <div className="p-4 bg-yellow-500/20 rounded-lg border-2 border-yellow-500 animate-pulse" />
        </div>
      </div>
      
      {/* Tutorial content */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/80 rounded-lg border border-yellow-500/20 p-6 max-w-md">
        <h3 className="text-yellow-500 text-lg font-medium mb-2">
          {steps[currentStep].title}
        </h3>
        <p className="text-gray-300 mb-4">
          {steps[currentStep].description}
        </p>
        <div className="flex justify-between">
          <button 
            onClick={() => setCurrentStep(prev => prev - 1)}
            disabled={currentStep === 0}
            className="text-yellow-500 disabled:text-gray-500"
          >
            Previous
          </button>
          <div className="text-gray-400">
            {currentStep + 1} / {steps.length}
          </div>
          <button 
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="text-yellow-500"
          >
            {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
} 