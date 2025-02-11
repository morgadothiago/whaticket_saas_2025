export function HeroSection() {
  return (
    <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
      <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center" />
      <div className="relative z-20 flex flex-col items-center text-lg font-medium justify-center h-full">
        <h1 className="text-3xl font-bold text-center">Esqueceu a Senha?</h1>
        <p className="text-sm text-gray-200 text-center">
          Digite seu email para receber instruções de recuperação.
        </p>
      </div>
    </div>
  )
} 