import { Home, Settings, Users, BarChart, FileText, Calendar, MessageCircle, Tag, Phone, Clock, HelpCircle, Megaphone, Info, Brain, Link2, Database, List, MessageSquare, UserCog, Terminal, DollarSign } from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/app/context/authContext'

const menuItemsGeral = [
  {
    title: 'Dashboard',
    icon: <Home className="h-5 w-5" />,
    href: '/page/Home',
  },
  {
    title: 'Atendimentos',
    icon: <MessageCircle className="h-5 w-5" />,
    href: '/page/atendimentos',
  },
  {
    title: 'Kanban',
    icon: <BarChart className="h-5 w-5" />,
    href: '/page/kanban',
  },
  {
    title: 'Resposta Rápida',
    icon: <MessageSquare className="h-5 w-5" />,
    href: '/page/resposta-rapida',
  },
  {
    title: 'Tarefas',
    icon: <FileText className="h-5 w-5" />,
    href: '/page/tarefas',
  },
  {
    title: 'Contatos',
    icon: <Phone className="h-5 w-5" />,
    href: '/page/contatos',
  },
  {
    title: 'Agendamentos',
    icon: <Clock className="h-5 w-5" />,
    href: '/page/agendamentos',
  },
  {
    title: 'Tags',
    icon: <Tag className="h-5 w-5" />,
    href: '/page/tags',
  },
  {
    title: 'Chat Interno',
    icon: <MessageCircle className="h-5 w-5" />,
    href: '/page/chat-interno',
  },
  {
    title: 'Ajuda',
    icon: <HelpCircle className="h-5 w-5" />,
    href: '/page/ajuda',
  },
]

const menuItemsAdmin = [
  {
    title: 'Campanhas',
    icon: <Megaphone className="h-5 w-5" />,
    href: '/page/campanhas',
  },
  {
    title: 'Informativos',
    icon: <Info className="h-5 w-5" />,
    href: '/page/informativos',
  },
  {
    title: 'Open IA',
    icon: <Brain className="h-5 w-5" />,
    href: '/page/open-ia',
  },
  {
    title: 'Integrações',
    icon: <Link2 className="h-5 w-5" />,
    href: '/page/integracoes',
  },
  {
    title: 'Conexões',
    icon: <Database className="h-5 w-5" />,
    href: '/page/conexoes',
  },
  {
    title: 'Lista de arquivos',
    icon: <List className="h-5 w-5" />,
    href: '/page/lista-de-arquivos',
  },
  {
    title: 'Fila & Chatbot',
    icon: <MessageSquare className="h-5 w-5" />,
    href: '/page/fila-chatbot',
  },
  {
    title: 'Usuários',
    icon: <UserCog className="h-5 w-5" />,
    href: '/page/usuarios',
  },
  {
    title: 'API',
    icon: <Terminal className="h-5 w-5" />,
    href: '/page/api',
  },
  {
    title: 'Financeiro',
    icon: <DollarSign className="h-5 w-5" />,
    href: '/page/financeiro',
  },
  {
    title: 'Configurações',
    icon: <Settings className="h-5 w-5" />,
    href: '/page/configuracoes',
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
    <div className="flex flex-col space-y-6">
      <div className="space-y-1">
        <h2 className="px-3 mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {user?.role === 'admin' ? 'Administração' : 'Principal'}
        </h2>
        <nav className="space-y-1">
          {user?.role === 'admin'
            ? [...menuItemsGeral, ...menuItemsAdmin].map((item, index) => (
              <MenuItem key={index} item={item} onItemClick={onItemClick} />
            ))
            : menuItemsGeral.map((item, index) => (
              <MenuItem key={index} item={item} onItemClick={onItemClick} />
            ))
          }
        </nav>
      </div>
    </div>
  )
}
