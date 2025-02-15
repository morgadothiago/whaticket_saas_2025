import { Home, Settings, Users, BarChart, FileText, Calendar, MessageCircle, Tag, Phone, Clock, HelpCircle, Megaphone, Info, Brain, Link2, Database, List, MessageSquare, UserCog, Terminal, DollarSign } from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/app/context/authContext'
import { Role } from "@/app/types/User"

const menuItemsGeral = [
  {
    title: 'Dashboard',
    icon: <Home className="h-5 w-5" />,
    href: '/page/home',
  },
  {
    title: 'Atendimentos',
    icon: <MessageCircle className="h-5 w-5" />,
    href: '/page/home/tickets',
  },
  {
    title: 'Kanban',
    icon: <BarChart className="h-5 w-5" />,
    href: '/page/home/kanban',
  },
  {
    title: 'Resposta Rápida',
    icon: <MessageSquare className="h-5 w-5" />,
    href: '/page/home/resposta-rapida',
  },
  {
    title: 'Tarefas',
    icon: <FileText className="h-5 w-5" />,
    href: '/page/home/tarefas',
  },
  {
    title: 'Contatos',
    icon: <Phone className="h-5 w-5" />,
    href: '/page/home/contatos',
  },
  {
    title: 'Agendamentos',
    icon: <Clock className="h-5 w-5" />,
    href: '/page/home/agendamentos',
  },
  {
    title: 'Tags',
    icon: <Tag className="h-5 w-5" />,
    href: '/page/home/tags',
  },
  {
    title: 'Chat Interno',
    icon: <MessageCircle className="h-5 w-5" />,
    href: '/page/home/chat-interno',
  },
  {
    title: 'Ajuda',
    icon: <HelpCircle className="h-5 w-5" />,
    href: '/page/home/ajuda',
  },
]

const menuItemsAdmin = [
  {
    title: 'Campanhas',
    icon: <Megaphone className="h-5 w-5" />,
    href: '/page/home/campanhas',
  },
  {
    title: 'Informativos',
    icon: <Info className="h-5 w-5" />,
    href: '/page/home/informativos',
  },
  {
    title: 'Open IA',
    icon: <Brain className="h-5 w-5" />,
    href: '/page/home/open-ia',
  },
  {
    title: 'Integrações',
    icon: <Link2 className="h-5 w-5" />,
    href: '/page/home/integracoes',
  },
  {
    title: 'Conexões',
    icon: <Database className="h-5 w-5" />,
    href: '/page/home/conections',
  },
  {
    title: 'Lista de arquivos',
    icon: <List className="h-5 w-5" />,
    href: '/page/home/lista-de-arquivos',
  },
  {
    title: 'Fila & Chatbot',
    icon: <MessageSquare className="h-5 w-5" />,
    href: '/page/home/fila-chatbot',
  },
  {
    title: 'Usuários',
    icon: <UserCog className="h-5 w-5" />,
    href: '/page/home/usuarios',
  },
  {
    title: 'API',
    icon: <Terminal className="h-5 w-5" />,
    href: '/page/home/api',
  },
  {
    title: 'Financeiro',
    icon: <DollarSign className="h-5 w-5" />,
    href: '/page/home/financeiro',
  },
  {
    title: 'Configurações',
    icon: <Settings className="h-5 w-5" />,
    href: '/page/home/configuracoes',
  },
]

interface MenuItemProps {
  item: typeof menuItemsGeral[0]
  onItemClick?: () => void
}

const MenuItem = ({ item, onItemClick }: MenuItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === item.href

  return (
    <Link
      href={item.href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ease-in-out text-sm
        ${isActive
          ? 'bg-blue-500 text-white font-medium shadow-md'
          : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
        }`}
      onClick={onItemClick}
    >
      {item.icon}
      <span>{item.title}</span>
    </Link>
  )
}

export function MenuItems({ onItemClick }: { onItemClick?: () => void }) {
  const { user } = useAuth()

  return (
    <div className="flex flex-col h-full">
      <div className="px-3 mb-4">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Principal
        </h2>
      </div>

      <div className="flex-1 px-3 space-y-1 overflow-y-auto custom-scrollbar">
        <nav className="space-y-1">
          {menuItemsGeral.map((item, index) => (
            <MenuItem key={index} item={item} onItemClick={onItemClick} />
          ))}
        </nav>

        {user?.role === Role.ADMIN && (
          <>
            <div className="my-6 px-3">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <h2 className="mt-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Administração
              </h2>
            </div>

            <nav className="space-y-1">
              {menuItemsAdmin.map((item, index) => (
                <MenuItem key={index} item={item} onItemClick={onItemClick} />
              ))}
            </nav>
          </>
        )}
      </div>
    </div>
  )
}
