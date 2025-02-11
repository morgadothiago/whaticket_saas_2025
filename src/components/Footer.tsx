export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-700/50 bg-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
      </div>
    </footer>
  )
} 