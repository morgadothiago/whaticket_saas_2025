import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from '@/app/context/authContext'

export function LogoutButton() {
  const { logout } = useAuth()

  return (
    <Button
      variant="ghost"
      className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50"
      onClick={logout}
    >
      <LogOut className="h-5 w-5" />
      Sair
    </Button>
  )
} 