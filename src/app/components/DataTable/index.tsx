import { Button } from "@/components/ui/button"
import { Check, Edit, Maximize2, Trash } from "lucide-react"

interface FormData {
  name: string;
  phone: string;
}

interface DataTableProps {
  data: FormData[];
}

export default function DataTable({ data }: DataTableProps) {
  return (
    <div className="mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 font-medium text-gray-700">Nome</th>
              <th className="px-6 py-4 font-medium text-gray-700">Status</th>
              <th className="px-6 py-4 font-medium text-gray-700">Sessão</th>
              <th className="px-6 py-4 font-medium text-gray-700">Última atualização</th>
              <th className="px-6 py-4 font-medium text-gray-700">Padrão</th>
              <th className="px-6 py-4 font-medium text-gray-700">Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">
                  <Maximize2 className="h-4 w-4 text-gray-500" />
                </td>
                <td className="px-6 py-4">
                  <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600">
                    QR CODE
                  </Button>
                </td>
                <td className="px-6 py-4">
                  {new Date().toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <Check className="h-5 w-5 text-green-500" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="hover:bg-gray-200 transition-colors duration-200">
                      <Edit className="h-4 w-4 text-gray-500" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-gray-200 transition-colors duration-200">
                      <Trash className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
