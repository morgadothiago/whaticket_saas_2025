'use client'
import SlideMenu from '@/app/components/SlideMenu';
import { useAuth } from '@/app/context/authContext';
import { redirect } from 'next/navigation'
import { Bell, Menu, MessageSquareDot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

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
      <div className="flex-1 lg:pl-[280px]">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
          <div className="flex h-16 items-center gap-4 px-4 shadow-sm">
            <div className="flex items-center gap-4">
              <Button
                className="lg:hidden"
                onClick={() => setIsOpen(true)}
                variant="ghost"
              >
                <Menu />
              </Button>
              <h1 className="text-lg md:text-xl font-semibold">Bem-vindo, {user?.email}</h1>
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquareDot className="h-5 w-5" />
              </Button>
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