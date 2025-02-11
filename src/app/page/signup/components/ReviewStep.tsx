import { UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { SignUpFormData } from '@/app/types/SignUpTypes';

interface ReviewStepProps {
  form: UseFormReturn<SignUpFormData>;
  onBack: () => void;
  onSubmit: (data: SignUpFormData) => Promise<void>;
  isLoading: boolean;
}

export function ReviewStep({ form, onBack, onSubmit, isLoading }: ReviewStepProps) {
  const { getValues, handleSubmit } = form;
  const values = getValues();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="rounded-lg bg-gray-50 p-4">
          <h3 className="font-medium mb-2">Revise suas informações</h3>
          <div className="space-y-2 text-sm">
            <p><span className="text-gray-600">Nome:</span> {values.fullName}</p>
            <p><span className="text-gray-600">Email:</span> {values.email}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <Button
          variant="outline"
          className="w-full"
          onClick={onBack}
        >
          Voltar
        </Button>
        <Button
          className="w-full"
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          {isLoading ? 'Criando conta...' : 'Criar conta'}
        </Button>
      </div>
    </div>
  );
} 