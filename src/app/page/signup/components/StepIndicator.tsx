import { User, KeyRound, CheckCircle } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <User className="w-4 h-4" />;
      case 2:
        return <KeyRound className="w-4 h-4" />;
      case 3:
        return <CheckCircle className="w-4 h-4" />;
      default:
        return step;
    }
  };

  return (
    <div className="flex items-center justify-center mb-8">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${index + 1 <= currentStep
                ? 'bg-zinc-900 text-white'
                : 'bg-gray-200 text-gray-600'
              }`}
          >
            {getStepIcon(index + 1)}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`w-12 h-1 ${index + 1 < currentStep ? 'bg-zinc-900' : 'bg-gray-200'
                }`}
            />
          )}
        </div>
      ))}
    </div>
  );
} 