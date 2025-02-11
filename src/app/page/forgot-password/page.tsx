'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { toast } from 'sonner'
import { ForgotPasswordForm } from './components/ForgotPasswordForm'
import { HeroSection } from './components/HeroSection'

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (data: { email: string }) => {
    try {
      setIsLoading(true)
      console.log(JSON.stringify({ message: 'Sending password reset email to', email: data.email }))
      // Simulate email sending
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      setIsSubmitted(true);
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
      <HeroSection />
      <div className="lg:p-8">
        <Card className="mx-auto max-w-sm">
          <CardContent>
            {!isSubmitted ? (
              <ForgotPasswordForm onSubmit={handleSubmit} isLoading={isLoading} />
            ) : (
              <div className="text-center">
                <h2 className="text-lg font-bold mb-4">Verifique seu Email</h2>
                <p className="text-sm text-gray-600 mb-2">
                  Um email foi enviado para você com instruções para redefinir sua senha.
                </p>
                <p className="text-sm text-gray-400">
                  Se você não receber o email, verifique sua caixa de spam ou tente novamente.
                </p>
              </div>
            )}
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
