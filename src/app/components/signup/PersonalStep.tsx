import { Input } from "@/components/ui/input"
import { UseFormReturn } from "react-hook-form"

interface PersonalStepProps {
  form: UseFormReturn<{
    email: string;
    password: string;
    confirmPassword: string;
  }>
}

export function PersonalStep({ form }: PersonalStepProps) {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <Input
        id="email"
        type="email"
        placeholder="seu@email.com"
        {...form.register("email")}
        className="mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      />
      {form.formState.errors.email && (
        <p className="mt-1 text-sm text-red-600">
          {form.formState.errors.email.message}
        </p>
      )}
    </div>
  )
} 