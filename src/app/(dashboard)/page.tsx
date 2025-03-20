import DashboardCard from '@/components/dashboard/DashboardCard'
import { FaUsers, FaRobot, FaComments } from 'react-icons/fa'

export default function DashboardHome() {
  const stats = [
    {
      title: 'Total de Usuários',
      value: '1,234',
      change: '+12%',
      icon: FaUsers,
      trend: 'up' as const
    },
    {
      title: 'Chatbots Ativos',
      value: '15',
      change: '+3',
      icon: FaRobot,
      trend: 'up' as const
    },
    {
      title: 'Mensagens/Dia',
      value: '8,567',
      change: '+5%',
      icon: FaComments,
      trend: 'up' as const
    }
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      {/* Área para gráficos e mais conteúdo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Atividade Recente</h3>
          {/* Implementar gráfico de atividade */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Desempenho</h3>
          {/* Implementar gráfico de desempenho */}
        </div>
      </div>
    </div>
  )
}
