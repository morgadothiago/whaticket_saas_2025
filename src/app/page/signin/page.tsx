'use client'

import TextInput from '@/app/components/Input'
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import type { SigninTypes } from '@/app/types/SigninTypes'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from 'sonner'
import { useAuth } from '@/app/context/authContext'
import { useRouter } from 'next/navigation'

export default function page() {

  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória')
  })
  const { register, handleSubmit, formState: { errors } } = useForm<SigninTypes>({
    resolver: yupResolver(schema)
  })
  const router = useRouter();

  const { login } = useAuth();

  const onSubmit: SubmitHandler<SigninTypes> = async (data) => {
    const loginResult = await login(data);

    if (loginResult) {
      toast.success('Login successful! Redirecting to home...', {
        duration: 2000,
        position: 'top-right',
        style: {
          background: '#4caf50',
          color: '#fff',
          border: '1px solid #388e3c',
          padding: '10px',
          borderRadius: '5px',
        }
      });
      router.push('/page/Home');
    } else {
      toast.error('Login failed. Please check your credentials and try again.', {
        duration: 2000,
        position: 'top-right',
        style: {
          background: '#ff4d4d',
          color: '#fff',
          border: '1px solid #ff0000',
          padding: '10px',
          borderRadius: '5px',
        }
      });
    }
  }

  return (
    <div className='bg-gradient-to-br from-slate-300 to-slate-800 min-h-screen flex items-center justify-center p-5 sm:p-0'>
      <div className='bg-white rounded-lg shadow-lg max-w-md w-full p-8'>
        <h1 className='text-4xl font-extrabold mb-6 text-center text-gray-800'>Fazer login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <TextInput label='Email' className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' {...register('email')} />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
          </div>
          <div className="">
            <TextInput label='Senha' password className='border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' {...register('password')} />
            {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
          </div>
          <Button className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 mt-6 shadow-md'>
            Entrar
          </Button>
        </form>

        <p className='mt-4 text-center text-gray-600'>
          Não tem uma conta? <a href="/page/signup" className='text-blue-600 hover:underline font-semibold'>Crie uma aqui</a>
        </p>
      </div>
    </div>
  )
}
