'use client'

import React, { useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { UserPlus } from 'lucide-react';
import { StepIndicator } from '@/app/components/signup/StepIndicator';
import { PersonalInfoStep } from '@/app/components/signup/PersonalInfoStep';
import { PasswordStep } from '@/app/components/signup/PasswordStep';
import { ReviewStep } from '@/app/components/signup/ReviewStep';

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

export default function SignUp() {
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

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-lg">
            <UserPlus className="h-12 w-12 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Crie sua conta
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Comece sua jornada conosco
        </p>

        <div className="mt-8 mb-8">
          <StepIndicator currentStep={currentStep} totalSteps={3} />
        </div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            {currentStep === 1 && <PersonalInfoStep form={form} onNext={nextStep} />}
            {currentStep === 2 && <PasswordStep form={form} onBack={prevStep} onNext={nextStep} />}
            {currentStep === 3 && <ReviewStep form={form} onBack={prevStep} onSubmit={onSubmit} isLoading={isLoading} />}
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  ou
                </span>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              Já tem uma conta?{' '}
              <Link
                href="/page/signin"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
              >
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
