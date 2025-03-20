import { IconType } from 'react-icons';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

interface DashboardCardProps {
  title: string;
  value: string;
  change: string;
  icon: IconType;
  trend: 'up' | 'down';
}

export default function DashboardCard({ title, value, change, icon: Icon, trend }: DashboardCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 font-medium">{title}</h3>
        <Icon className="w-6 h-6 text-roxo-medio" />
      </div>
      
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold">{value}</span>
        <div className={`flex items-center ${trend === 'up' ? 'text-sucesso' : 'text-erro'}`}>
          {trend === 'up' ? <FaArrowUp className="w-4 h-4 mr-1" /> : <FaArrowDown className="w-4 h-4 mr-1" />}
          <span>{change}</span>
        </div>
      </div>
    </div>
  );
}
