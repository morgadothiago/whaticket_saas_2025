'use client'
import SlideMenu from '@/app/components/SlideMenu';
import { useAuth } from '@/app/context/authContext';
import { redirect } from 'next/navigation'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { token } = useAuth();

  const storedToken = localStorage.getItem('token');
  if (!token && !storedToken) {
    redirect('/page/signin');
  }

  return <>
    <div>
      <SlideMenu />

      {children}
    </div>
  </>
} 