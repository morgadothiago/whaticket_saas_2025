import { Check } from "lucide-react"

interface Step {
  id: number
  name: string
}

interface StepsProps {
  steps: Step[]
  currentStep: number
}

export function Steps({ steps, currentStep }: StepsProps) {
  return (
    <div className="mt-8 max-w-md mx-auto">
      <nav aria-label="Progress">
        <ol role="list" className="flex items-center justify-between">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className={`relative ${stepIdx !== steps.length - 1 ? 'w-full' : ''}`}>
              {stepIdx !== steps.length - 1 && (
                <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gray-300">
                  <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: currentStep > step.id ? '100%' : '0%' }}
                  />
                </div>
              )}
              <div className="relative flex items-center justify-center">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full">
                  {currentStep > step.id ? (
                    <Check className="h-5 w-5 text-blue-600" />
                  ) : (
                    <span
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium
                        ${currentStep === step.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                        }`}
                    >
                      {step.id}
                    </span>
                  )}
                </span>
                <span className="absolute -bottom-6 text-xs font-medium text-gray-500">
                  {step.name}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
} 