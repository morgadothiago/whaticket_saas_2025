'use client'

import React, { useState } from 'react'
import { MobileMenu } from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'

interface SlideMenuProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function SlideMenu({ isOpen, onOpenChange }: SlideMenuProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)

  const isControlled = isOpen !== undefined
  const open = isControlled ? isOpen : internalIsOpen
  const handleOpenChange = isControlled ? onOpenChange : setInternalIsOpen

  return (
    <>
      <MobileMenu isOpen={open} onOpenChange={handleOpenChange as (open: boolean) => void} />
      <DesktopMenu />
    </>
  )
}