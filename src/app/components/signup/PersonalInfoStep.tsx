'use client'

import { Input } from "@/components/ui/input"
import { UseFormReturn } from "react-hook-form"
import { AtSign, User } from "lucide-react"
import type { SignUpFormData } from "@/app/types/SignUpTypes"

interface PersonalInfoStepProps {
  form: UseFormReturn<SignUpFormData>;
  onNext: () => void;
}

export function PersonalInfoStep({ form }: PersonalInfoStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="fullName" className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
          <User className="w-4 h-4 mr-2 text-gray-400" />
          Nome completo
        </label>
        <div className="relative">
          <Input
            {...form.register('fullName')}
            id="fullName"
            type="text"
            className="pl-3 pr-3 py-2 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg shadow-sm transition-colors"
            placeholder="Digite seu nome completo"
            autoFocus
          />
        </div>
        {form.formState.errors.fullName && (
          <p className="mt-1.5 text-sm text-red-500 flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
            {form.formState.errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
          <AtSign className="w-4 h-4 mr-2 text-gray-400" />
          Email
        </label>
        <div className="relative">
          <Input
            {...form.register('email')}
            id="email"
            type="email"
            className="pl-3 pr-3 py-2 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg shadow-sm transition-colors"
            placeholder="seu@email.com"
          />
        </div>
        {form.formState.errors.email && (
          <p className="mt-1.5 text-sm text-red-500 flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
            {form.formState.errors.email.message}
          </p>
        )}
      </div>
    </div>
  );
} 