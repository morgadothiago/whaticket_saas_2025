import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MenuItems } from './MenuItems'
import { LogoutButton } from './LogoutButton'
import { Icons } from '@/components/ui/icons'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/app/context/authContext"


interface MobileMenuProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileMenu({ isOpen, onOpenChange }: MobileMenuProps) {
  const { user } = useAuth()

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[300px] p-0">
        <SheetHeader className="sr-only">
          <SheetTitle>Menu de Navegação</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Icons.logo className="h-8 w-8 text-blue-600" />
              <div>
                <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Dashboard
                </span>
                <p className="text-xs text-gray-500 mt-0.5">Gerenciamento completo</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="" />
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  {user?.email?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-700">{user?.email}</p>
                <p className="text-xs text-gray-500">Administrador</p>
              </div>
            </div>
          </div>

          <div className="flex-1 py-6 overflow-y-auto custom-scrollbar">
            <MenuItems onItemClick={() => onOpenChange(false)} />
          </div>

          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <LogoutButton />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
} 