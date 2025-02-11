'use client'

import TextInput from '@/app/components/Input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import type { SigninTypes } from '@/app/types/SigninTypes'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from 'sonner'
import { useAuth } from '@/app/context/authContext'
import { useRouter } from 'next/navigation'
import { Icons } from '@/components/ui/icons'

export default function SignInPage() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória')
  })

  const { register, handleSubmit, formState: { errors }, watch } = useForm<SigninTypes>({
    resolver: yupResolver(schema)
  })

  const router = useRouter()
  const { login } = useAuth()

  const onSubmit: SubmitHandler<SigninTypes> = async (data) => {
    try {
      setIsLoading(true)
      const loginResult = await login(data)

      if (loginResult) {
        toast.success('Login realizado com sucesso!', {
          position: 'top-right',
          richColors: true,
          duration: 2000,
        })
        router.push('/page/Home')
      } else {
        toast.error('Credenciais inválidas', {
          position: 'top-right',
          richColors: true,
          duration: 2000,
        })
      }
    } catch (error) {
      toast.error('Erro ao fazer login')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Icons.logo className="mr-2 h-6 w-6" />
          Your App Name
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This app has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <Card className="mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Entrar na conta</h1>
            <p className="text-sm text-muted-foreground">
              Digite suas credenciais para acessar sua conta
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <TextInput
                    label="Email"
                    placeholder="nome@exemplo.com"
                    {...register('email')}

                  />
                </div>
                <div className="grid gap-2">
                  <TextInput
                    label="Senha"
                    type="password"
                    placeholder="Digite sua senha"
                    {...register('password')}

                  />
                </div>
                <Button
                  className="w-full"
                  type="submit"
                  disabled={isLoading || !watch('email') || !watch('password')}
                >
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {isLoading ? 'Entrando...' : 'Entrar'}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm text-muted-foreground">
              <span className="mr-1 hidden sm:inline-block">
                Não tem uma conta?
              </span>
              <a
                href="/page/signup"
                className="text-primary underline-offset-4 transition-colors hover:underline"
              >
                Criar conta
              </a>
            </div>
            <a
              href="/forgot-password"
              className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
            >
              Esqueceu a senha?
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
