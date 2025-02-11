'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { toast } from 'sonner'
import { ForgotPasswordForm } from './components/ForgotPasswordForm'
import { HeroSection } from './components/HeroSection'

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (data: { email: string }) => {
    try {
      setIsLoading(true)
      console.log(JSON.stringify({ message: 'Sending password reset email to', email: data.email }))
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
            <ForgotPasswordForm onSubmit={handleSubmit} isLoading={isLoading} />
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
