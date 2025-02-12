import { Home, Settings, Users, BarChart, FileText, Calendar } from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/app/context/authContext'

const menuItems = [
  {
    title: 'Dashboard',
    icon: <Home className="h-5 w-5" />,
    href: '/page/Home',
  },
  {
    title: 'Analytics',
    icon: <BarChart className="h-5 w-5" />,
    href: '/page/analytics',
  },
  {
    title: 'Relatórios',
    icon: <FileText className="h-5 w-5" />,
    href: '/page/reports',
  },
  {
    title: 'Agenda',
    icon: <Calendar className="h-5 w-5" />,
    href: '/page/calendar',
  },
  {
    title: 'Usuários',
    icon: <Users className="h-5 w-5" />,
    href: '/page/users',
    role: 'admin'
  },
  {
    title: 'Configurações',
    icon: <Settings className="h-5 w-5" />,
    href: '/page/settings',
  },
]

interface MenuItemProps {
  item: typeof menuItems[0]
  onItemClick?: () => void
}

const MenuItem = ({ item, onItemClick }: MenuItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === item.href

  return (
    <Link
      href={item.href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
        ${isActive
          ? 'bg-slate-200 text-slate-900'
          : 'hover:bg-slate-200/50 text-slate-600 hover:text-slate-900'
        }`}
      onClick={onItemClick}
    >
      {item.icon}
      {item.title}
    </Link>
  )
}

export function MenuItems({ onItemClick }: { onItemClick?: () => void }) {
  const { user } = useAuth()

  return (
    <>
      <div className="mb-4 px-3">
        <p className="text-sm font-medium">Bem-vindo,</p>
        <p className="text-sm text-slate-500">{user?.email}</p>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item, index) => (
          (!item.role || item.role === user?.role) && (
            <MenuItem key={index} item={item} onItemClick={onItemClick} />
          )
        ))}
      </nav>
    </>
  )
} 