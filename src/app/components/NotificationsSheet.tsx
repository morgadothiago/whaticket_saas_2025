'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Bell, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Notification {
  id: number
  title: string
  message: string
  time: string
  read: boolean
}

interface NotificationsSheetProps {
  notifications: Notification[]
  variant?: 'bell' | 'message'
}

export function NotificationsSheet({ notifications, variant = 'bell' }: NotificationsSheetProps) {
  const unreadCount = notifications.filter(notification => !notification.read).length
  const Icon = variant === 'bell' ? Bell : MessageSquare

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-gray-100 relative">
          <Icon className="h-5 w-5 text-gray-500" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[400px] sm:w-[540px] p-0">
        <SheetHeader className="p-6 border-b border-gray-100">
          <SheetTitle className="text-xl font-semibold">
            {variant === 'bell' ? 'Notificações' : 'Mensagens'}
          </SheetTitle>
        </SheetHeader>
        <div className="overflow-y-auto h-full pb-6">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer
                ${notification.read ? 'opacity-60' : ''}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                    {notification.title}
                    {!notification.read && (
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {notification.message}
                  </p>
                  <span className="mt-2 text-xs text-gray-400">
                    {notification.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
} 