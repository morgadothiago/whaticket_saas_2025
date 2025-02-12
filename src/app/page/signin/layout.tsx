'use client'
import { redirect } from 'next/navigation';

import React from 'react'
import { useAuth } from '@/app/context/authContext'
import { useRouter } from 'next/navigation';


export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}
