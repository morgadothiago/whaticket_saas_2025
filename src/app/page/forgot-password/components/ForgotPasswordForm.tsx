'use client'

import { Button } from '@/components/ui/button'
import TextInput from '@/app/components/Input'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type ForgotPasswordForm = {
  email: string
}

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email é obrigatório')
})

interface ForgotPasswordFormProps {
  onSubmit: (data: ForgotPasswordForm) => Promise<void>
  isLoading: boolean
}

export function ForgotPasswordForm({ onSubmit, isLoading }: ForgotPasswordFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordForm>({
    resolver: yupResolver(schema)
  })

  return (
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
  )
} 