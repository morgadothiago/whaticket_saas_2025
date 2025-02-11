import { UseFormReturn } from 'react-hook-form';
import TextInput from '@/app/components/Input';
import { Button } from '@/components/ui/button';

interface PersonalInfoStepProps {
  form: UseFormReturn<any>;
  onNext: () => void;
}

export function PersonalInfoStep({ form, onNext }: PersonalInfoStepProps) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-4">
      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        {...register('fullName')}

        isProfile={true}
      />
      <TextInput
        label="Email"
        placeholder="seu@email.com"
        {...register('email')}
        error={errors.email?.message}
      />
      <Button
        className="w-full"
        onClick={onNext}
      >
        Próximo
      </Button>
    </div>
  );
} 