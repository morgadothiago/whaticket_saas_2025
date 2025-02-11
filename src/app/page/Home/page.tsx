'use client'

import React, { useEffect } from 'react'
import { useAuth } from '@/app/context/authContext'
import { useRouter } from 'next/navigation'

export default function page() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user?.email) {
      router.push('/page/signin');
    }
  }, [user, router]);

  return (
    <div>
      <h1>Home</h1>
      <p>{user?.email}</p>
    </div>
  )
}
