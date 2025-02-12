import { MenuItems } from './MenuItems'
import { LogoutButton } from './LogoutButton'
import { Icons } from '@/components/ui/icons'

export function DesktopMenu() {
  return (
    <div className="hidden lg:block fixed left-0 top-0 h-full w-[280px] border-r bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b">
          <div className="flex items-center gap-2 px-2">
            <Icons.logo className="h-6 w-6" />
            <span className="font-semibold text-xl">Dashboard</span>
          </div>
        </div>
        <div className="flex-1 px-3 py-6">
          <MenuItems />
        </div>
        <div className="border-t p-4">
          <LogoutButton />
        </div>
      </div>
    </div>
  )
} 