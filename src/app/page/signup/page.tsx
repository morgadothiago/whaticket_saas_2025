'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { StepIndicator } from './components/StepIndicator';
import { PersonalInfoStep } from './components/PersonalInfoStep';
import { PasswordStep } from './components/PasswordStep';
import { ReviewStep } from './components/ReviewStep';

const schema = yup.object().shape({
  fullName: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'As senhas não conferem')
    .required('Confirmação de senha é obrigatória'),
});

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const values = form.getValues();
      console.log('Form submitted:', values);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast.success('Conta criada com sucesso!', {
        position: 'top-right',
        richColors: true,
      });

      router.push('/page/signin');
    } catch (error) {
      toast.error('Erro ao criar conta. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep form={form} onNext={nextStep} />;
      case 2:
        return <PasswordStep form={form} onBack={prevStep} onNext={nextStep} />;
      case 3:
        return <ReviewStep form={form} onBack={prevStep} onSubmit={onSubmit} isLoading={isLoading} />;
      default:
        return null;
    }
  };

  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-600 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <h1 className="text-4xl font-extrabold">Crie sua conta</h1>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Junte-se a nós e descubra todas as possibilidades que temos para oferecer.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <Card className="mx-auto max-w-sm shadow-lg">
          <CardHeader>
            <StepIndicator currentStep={currentStep} totalSteps={3} />
          </CardHeader>
          <CardContent>
            {renderStep()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
