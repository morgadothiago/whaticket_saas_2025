'use client'

import { useAuth } from '@/app/context/authContext'
import { redirect } from 'next/navigation'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  if (!token) {
    redirect('/page/signin')
  }

  return <>{children}</>
} 