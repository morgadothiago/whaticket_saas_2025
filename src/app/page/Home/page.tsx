'use client'

import React, { useEffect } from 'react'
import { useAuth } from '@/app/context/authContext'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const { user, token } = useAuth();
  return (
    <div>
      <h1>Home, {user?.role}</h1>
      <p>{user?.email}</p>
      <p>{user?.token}</p>
      x
      {/* 
        <menu>
          <li>
            <Link href="/page/admin">Admin</Link>
          </li>

          {
            user?.role === 'admin' && (
              <li>
                <Link href="/page/admin">Admin</Link>
              </li>
            )
          }
        </menu>
      
      */}
    </div>
  )
}
