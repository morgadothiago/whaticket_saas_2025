import { UseFormReturn } from 'react-hook-form';
import TextInput from '@/app/components/Input';
import { Button } from '@/components/ui/button';
import { SignUpFormData } from '@/app/types/SignUpTypes';

interface PasswordStepProps {
  form: UseFormReturn<SignUpFormData>;
  onBack: () => void;
  onNext: () => void;
}

export function PasswordStep({ form, onBack, onNext }: PasswordStepProps) {
  const { register, formState: { errors }, trigger } = form;

  const handleNext = async () => {
    const isValid = await trigger(['password', 'confirmPassword']);
    if (isValid) {
      onNext();
    }
  };

  return (
    <div className="space-y-4">
      <TextInput
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        {...register('password')}
        error={errors.password?.message as string}
      />
      <TextInput
        label="Confirmar Senha"
        type="password"
        placeholder="Confirme sua senha"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message as string}
      />
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
          onClick={handleNext}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
} 