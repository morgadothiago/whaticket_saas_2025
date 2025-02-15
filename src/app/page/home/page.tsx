'use client'

import React from 'react'
import { useAuth } from '@/app/context/authContext'

export default function HomePage() {
  const { user, token } = useAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user?.nome}</p>
    </div>
  )
}
