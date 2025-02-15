import { Check } from "lucide-react"

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1)

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step} className="relative flex flex-col items-center">
            {/* Linha conectora */}
            {index < steps.length - 1 && (
              <div className="absolute left-[50%] w-full h-[2px] top-1/2 -translate-y-1/2">
                <div className="h-full bg-gray-200">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-in-out"
                    style={{
                      width: currentStep > step ? '100%' : '0%',
                    }}
                  />
                </div>
              </div>
            )}

            {/* Círculo do step */}
            <div
              className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 
                ${currentStep > step
                  ? 'bg-blue-500 border-blue-500'
                  : currentStep === step
                    ? 'bg-blue-500 border-blue-500'
                    : 'bg-white border-gray-300'
                }`}
            >
              {currentStep > step ? (
                <Check className="w-5 h-5 text-white" />
              ) : (
                <span
                  className={`text-sm font-medium
                    ${currentStep >= step ? 'text-white' : 'text-gray-500'}`}
                >
                  {step}
                </span>
              )}
            </div>

            {/* Label do step */}
            <span
              className={`absolute -bottom-6 text-xs font-medium transition-colors duration-200
                ${currentStep >= step ? 'text-blue-600' : 'text-gray-500'}`}
            >
              {step === 1 ? 'Dados' : step === 2 ? 'Senha' : 'Revisão'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
} 