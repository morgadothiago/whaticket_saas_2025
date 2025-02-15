'use client'
import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from '@/app/context/authContext'
import { useRouter } from 'next/navigation'
import Link from "next/link"
import { LogIn } from "lucide-react"
import { toast } from "sonner"
import type { SignInFormData } from "@/app/types/SigninTypes"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Icons } from "@/components/ui/icons"



export default function SignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    senha: yup.string().required('Senha é obrigatória')
  })

  const { register, handleSubmit, formState: { errors }, watch } = useForm<SignInFormData>({
    resolver: yupResolver(schema)
  })

  const router = useRouter()
  const { login } = useAuth()

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    console.log("Aqui esta  ->", data)
    const response = await login(data)

    if (response) {
      toast.success('Login realizado com sucesso!', {
        description: 'Você está sendo redirecionado para a página inicial',
        duration: 3000,
        position: 'top-right',
        richColors: true,
      })
      router.push('/page/home')
    } else {
      toast.error('Erro ao fazer login', {
        description: 'Verifique suas credenciais e tente novamente',
        duration: 3000,
        position: 'top-right',
        richColors: true,
      })
    }
  }
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="p-3 bg-blue-50 rounded-2xl">
            <LogIn className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Fazer login
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Entre com suas credenciais para acessar sua conta
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  className={`appearance-none block w-full px-3 py-2 border ${errors.email ? 'border-red-600' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <div className="mt-1">
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••"
                  {...register("senha")}
                  className={`appearance-none block w-full px-3 py-2 border ${errors.senha ? 'border-red-600' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.senha && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.senha.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href="/page/forgot-password"
                  className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
            </div>

            <div>
              <Button
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-500 transition-colors"
                type="submit"
                disabled={isLoading || !watch('email') || !watch('senha')}
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                {isLoading ? 'Entrando...' : 'Entrar'}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              Não tem uma conta?{' '}
              <Link
                href="/page/signup"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
              >
                Registre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
