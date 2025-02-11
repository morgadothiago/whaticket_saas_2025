'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import TextInput from '@/app/components/Input'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type ForgotPasswordForm = {
  email: string
}

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)

  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Email é obrigatório')
  })

  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordForm>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: ForgotPasswordForm) => {
    try {
      setIsLoading(true)
      // Here you would typically call an API to send the email
      console.log(JSON.stringify({ message: 'Sending password reset email to', email: data.email }));
      toast.success('Email de recuperação enviado com sucesso!', {
        position: 'top-right',
        richColors: true,
        duration: 2000,
      })
    } catch (error) {
      toast.error('Erro ao enviar o email de recuperação')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center" />
        <div className="relative z-20 flex flex-col items-center text-lg font-medium justify-center h-full">
          <h1 className="text-3xl font-bold text-center">Esqueceu a Senha?</h1>
          <p className="text-sm text-gray-200 text-center">
            Digite seu email para receber instruções de recuperação.
          </p>
        </div>
      </div>
      <div className="lg:p-8">
        <Card className="mx-auto max-w-sm">
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid gap-4">
                <TextInput
                  label="Email"
                  placeholder="nome@exemplo.com"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? 'Enviando...' : 'Enviar Email'}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-400 text-center w-full">
              Lembre-se de verificar sua caixa de entrada.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
