'use client'

import { Input } from "@/components/ui/input"
import { UseFormReturn } from "react-hook-form"
import { Eye, EyeOff, Lock } from "lucide-react"
import { useState } from "react"
import type { SignUpFormData } from "@/app/types/SignUpTypes"

interface PasswordStepProps {
  form: UseFormReturn<SignUpFormData>;
  onBack: () => void;
  onNext: () => void;
}

export function PasswordStep({ form }: PasswordStepProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="password" className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
          <Lock className="w-4 h-4 mr-2 text-gray-400" />
          Senha
        </label>
        <div className="relative">
          <Input
            {...form.register('password')}
            id="password"
            type={showPassword ? "text" : "password"}
            className="pl-3 pr-10 py-2 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg shadow-sm transition-colors"
            placeholder="••••••"
            autoFocus
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {form.formState.errors.password && (
          <p className="mt-1.5 text-sm text-red-500 flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
            {form.formState.errors.password.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword" className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
          <Lock className="w-4 h-4 mr-2 text-gray-400" />
          Confirmar senha
        </label>
        <div className="relative">
          <Input
            {...form.register('confirmPassword')}
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            className="pl-3 pr-10 py-2 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg shadow-sm transition-colors"
            placeholder="••••••"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {form.formState.errors.confirmPassword && (
          <p className="mt-1.5 text-sm text-red-500 flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
            {form.formState.errors.confirmPassword.message}
          </p>
        )}
      </div>
    </div>
  );
} 