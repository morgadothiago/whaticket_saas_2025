'use client'
import { redirect } from 'next/navigation';

import React from 'react'

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}
