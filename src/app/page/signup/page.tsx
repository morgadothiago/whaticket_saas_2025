'use client'

import React, { useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
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

interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const onSubmit = async (data: SignUpFormData) => {
    try {
      setIsLoading(true);
      console.log('Form submitted:', data);

      await new Promise(resolve => setTimeout(resolve, 1500));

      toast.success('Conta criada com sucesso!');
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
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - hide on mobile */}
      <div className="hidden lg:flex lg:w-1/2 lg:fixed lg:left-0 lg:h-full bg-muted">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-600 bg-zinc-900" />
        <div className="relative z-20 flex flex-col justify-between w-full p-8">
          <h1 className="text-4xl font-extrabold text-white">Crie sua conta</h1>
          <blockquote className="space-y-2 text-white">
            <p className="text-lg">
              &ldquo;Junte-se a nós e descubra todas as possibilidades que temos para oferecer.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>

      {/* Form Section - full width on mobile, half width on desktop */}
      <div className="flex-1 flex items-center justify-center p-4 lg:ml-[50%]">
        <Card className="w-full max-w-sm mx-auto shadow-lg">
          <CardHeader className="px-6 py-4">
            <StepIndicator currentStep={currentStep} totalSteps={3} />
          </CardHeader>
          <CardContent className="px-6">
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {renderStep()}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
