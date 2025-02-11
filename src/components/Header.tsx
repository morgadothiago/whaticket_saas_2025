import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-700/50 bg-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          Logo
        </Link>
        <nav className="space-x-4">
          <Link href="/page/signin" className="text-sm text-gray-200 hover:text-white transition-colors">
            Login
          </Link>
          <Link href="/page/signup" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Cadastro
          </Link>
        </nav>
      </div>
    </header>
  )
} 