import { UseFormReturn } from "react-hook-form"
import { AtSign, User } from "lucide-react"
import type { SignUpFormData } from "@/app/types/SignUpTypes";

interface ReviewStepProps {
  form: UseFormReturn<SignUpFormData>;
  onBack: () => void;
  onSubmit: (data: SignUpFormData) => Promise<void>;
  isLoading: boolean;
}

export function ReviewStep({ form }: ReviewStepProps) {
  const { getValues } = form;
  const values = getValues();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Confirme seus dados</h3>
        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <User className="w-4 h-4 mr-2" />
              Nome
            </div>
            <span className="font-medium text-gray-900">{values.fullName}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <AtSign className="w-4 h-4 mr-2" />
              Email
            </div>
            <span className="font-medium text-gray-900">{values.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 