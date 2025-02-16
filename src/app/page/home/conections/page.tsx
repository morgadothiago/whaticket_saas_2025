'use client'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Phone, PlusCircle } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useForm } from 'react-hook-form'
import DataTable from '@/app/components/DataTable/index'

interface FormData {
  name: string;
  phone: string;
}

export default function ConnectionsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();
  const [data, setData] = useState<FormData[]>([]);

  const generateQrCode = async (formData: FormData) => {
    console.log(formData);
    setData(prevData => [...prevData, formData]);
  }

  return (
    <div className=''>
      <div className="flex items-center justify-between">
        <h1>Conexão</h1>
        <Button onClick={() => setIsOpen(true)} className='bg-blue-500 hover:bg-blue-600'>
          <PlusCircle />
          Adicionar o WHATSAPP
        </Button>
      </div>

      <DataTable data={data} />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar o WHATSAPP</DialogTitle>
          </DialogHeader>
          <form className="p-6 flex flex-col space-y-4" onSubmit={handleSubmit(generateQrCode)}>
            <div className="flex items-center space-x-4">
              <Phone className='w-6 h-6 text-gray-600' />
              <Input
                placeholder="Digite o nome"
                {...register('name')}
                className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Phone className='w-6 h-6 text-gray-600' />
              <Input
                placeholder="Digite o número do WhatsApp"
                {...register('phone')}
                className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button type="submit">
              Adicionar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
