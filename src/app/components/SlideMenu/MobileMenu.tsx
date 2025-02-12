import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MenuItems } from './MenuItems'
import { LogoutButton } from './LogoutButton'
import { Icons } from '@/components/ui/icons'

interface MobileMenuProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileMenu({ isOpen, onOpenChange }: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[280px] p-0">
        <SheetHeader className="p-6 border-b">
          <div className="flex items-center gap-2 px-2">
            <Icons.logo className="h-6 w-6" />
            <SheetTitle className="text-left">Dashboard</SheetTitle>
          </div>
        </SheetHeader>
        <div className="flex flex-col h-[calc(100vh-5rem)]">
          <div className="flex-1 overflow-y-auto px-3 py-6">
            <MenuItems onItemClick={() => onOpenChange(false)} />
          </div>
          <div className="border-t p-4 mt-auto">
            <LogoutButton />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
} 