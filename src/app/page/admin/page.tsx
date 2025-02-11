'use client'

import { useAuth } from '@/app/context/authContext';
import React from 'react'

export default function page() {
  const { user } = useAuth();
  console.log(user)
  if (!user || user.role !== 'superadmin') {
    return <div>Acesso negado</div>;
  }

  return (
    <div>
      Tela do super admin, {user.role}
    </div>
  )
}
