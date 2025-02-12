'use client'
import SlideMenu from '@/app/components/SlideMenu';
import { useAuth } from '@/app/context/authContext';
import { redirect } from 'next/navigation'
import { Bell, Menu, MessageSquareDot, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { token, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!token && !storedToken) {
      setIsAuthenticated(false);
    }
  }, [token]);

  if (!isAuthenticated) {
    redirect('/page/signin');
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SlideMenu isOpen={isOpen} onOpenChange={setIsOpen} />
      <div className="flex-1 lg:pl-[300px]">
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-gray-100"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-5 w-5 text-gray-500" />
              </Button>

              <div className="hidden md:flex items-center gap-3 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar..."
                    className="pl-10 bg-gray-50 border-gray-200 focus:bg-white w-[300px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                  <Bell className="h-5 w-5 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                  <MessageSquareDot className="h-5 w-5 text-gray-500" />
                </Button>
              </div>

              <div className="h-8 w-px bg-gray-200" />

              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-gray-700">{user?.email}</p>
                  <p className="text-xs text-gray-500">{user?.role}</p>
                </div>
                <Avatar className="h-9 w-9">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-blue-100 text-blue-600">
                    {user?.email?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 