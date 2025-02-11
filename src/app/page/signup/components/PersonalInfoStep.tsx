import { UseFormReturn } from 'react-hook-form';
import TextInput from '@/app/components/Input';
import { Button } from '@/components/ui/button';
import { SignUpFormData } from '@/app/types/SignUpTypes';

interface PersonalInfoStepProps {
  form: UseFormReturn<SignUpFormData>;
  onNext: () => void;
}

export function PersonalInfoStep({ form, onNext }: PersonalInfoStepProps) {
  const { register, formState: { errors }, trigger } = form;

  const handleNext = async () => {
    const isValid = await trigger(['fullName', 'email']);
    if (isValid) {
      onNext();
    }
  };
  return (
    <div className="space-y-4">
      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        {...register('fullName')}
        error={errors.fullName?.message as string}
        isProfile={true}
      />
      <TextInput
        label="Email"
        placeholder="seu@email.com"
        {...register('email')}
        error={errors.email?.message as string}
      />
      <Button
        className="w-full"
        onClick={handleNext}
      >
        Próximo
      </Button>
    </div>
  );
} 