import { MenuItems } from './MenuItems'
import { LogoutButton } from './LogoutButton'
import { Icons } from '@/components/ui/icons'
import { useAuth } from '@/app/context/authContext'

export function DesktopMenu() {
  const { user } = useAuth()

  return (
    <div className="hidden lg:block fixed left-0 top-0 h-full w-[300px] bg-white border-r border-gray-200">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Icons.logo className="h-8 w-8 text-blue-600" />
            <div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {user?.Empresa.nome}
              </span>
              <p className="text-xs text-gray-500 mt-0.5">Gerenciamento completo</p>
            </div>
          </div>
        </div>

        <div className="flex-1 py-6 overflow-y-auto custom-scrollbar">
          <MenuItems />
        </div>

        <div className="flex items-center justify-between p-4 border-t border-gray-100 bg-white">

          <LogoutButton />
        </div>
      </div>
    </div>
  )
} 