import { UseFormReturn } from 'react-hook-form';
import TextInput from '@/app/components/Input';
import { Button } from '@/components/ui/button';

interface PasswordStepProps {
  form: UseFormReturn<any>;
  onBack: () => void;
  onNext: () => void;
}

export function PasswordStep({ form, onBack, onNext }: PasswordStepProps) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-4">
      <TextInput
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        {...register('password')}

      />
      <TextInput
        label="Confirmar Senha"
        type="password"
        placeholder="Confirme sua senha"
        {...register('confirmPassword')}

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
          onClick={onNext}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
} 