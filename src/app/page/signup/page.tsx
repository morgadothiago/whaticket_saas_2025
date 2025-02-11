'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import TextInput from '@/app/components/Input';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type SignupForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit } = useForm<SignupForm>();

  const onSubmit = (data: SignupForm) => {
    if (step === 3) {
      // Handle final submission
      console.log('User data:', data);
      toast.success('Cadastro realizado com sucesso!');
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center" />
        <div className="relative z-20 flex flex-col items-center text-lg font-medium justify-center h-full">
          <h1 className="text-3xl font-bold text-center">Cadastro</h1>
          <p className="text-sm text-gray-200 text-center">
            Preencha os campos abaixo para criar sua conta.
          </p>
        </div>
      </div>
      <div className="lg:p-8">
        <Card className="mx-auto max-w-sm">
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {step === 1 && (
                <>
                  <TextInput
                    label="Email"
                    placeholder="nome@exemplo.com"
                    {...register('email')}
                  />
                  <Button className="w-full" type="submit">
                    Próximo
                  </Button>
                </>
              )}
              {step === 2 && (
                <>
                  <TextInput
                    label="Senha"
                    type="password"
                    placeholder="Digite sua senha"
                    {...register('password')}
                  />
                  <Button className="w-full" type="submit">
                    Próximo
                  </Button>
                </>
              )}
              {step === 3 && (
                <>
                  <TextInput
                    label="Confirmar Senha"
                    type="password"
                    placeholder="Confirme sua senha"
                    {...register('confirmPassword')}
                  />
                  <Button className="w-full" type="submit">
                    Finalizar Cadastro
                  </Button>
                </>
              )}
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-400 text-center w-full">
              Passo {step} de 3
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
