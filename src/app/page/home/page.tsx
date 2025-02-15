'use client'

import React, { useEffect } from 'react'
import { useAuth } from '@/app/context/authContext'
import { useRouter } from 'next/navigation'
import SlideMenu from '@/app/components/SlideMenu'
export default function HomePage() {
  const { user, token } = useAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user?.nome}</p>
    </div>
  )
}
