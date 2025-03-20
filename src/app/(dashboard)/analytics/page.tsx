"use client";

import { useState } from 'react';
import { FaChartLine, FaUsers, FaClock, FaCheck } from 'react-icons/fa';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    {
      title: "Taxa de Conversão",
      value: "23.5%",
      change: "+2.1%",
      icon: FaChartLine
    },
    {
      title: "Usuários Ativos",
      value: "1,234",
      change: "+12%",
      icon: FaUsers
    },
    {
      title: "Tempo Médio",
      value: "2m 45s",
      change: "-30s",
      icon: FaClock
    },
    {
      title: "Resoluções",
      value: "89%",
      change: "+4%",
      icon: FaCheck
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
        <select 
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-white border rounded-md px-3 py-2"
        >
          <option value="24h">Últimas 24h</option>
          <option value="7d">Últimos 7 dias</option>
          <option value="30d">Últimos 30 dias</option>
          <option value="90d">Últimos 90 dias</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <metric.icon className="w-6 h-6 text-roxo-medio mb-4" />
            <h3 className="text-gray-500 font-medium">{metric.title}</h3>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold">{metric.value}</span>
              <span className={`text-sm ${metric.change.startsWith('+') ? 'text-sucesso' : 'text-erro'}`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Tendências de Uso</h3>
          {/* Implementar gráfico de tendências */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Distribuição de Usuários</h3>
          {/* Implementar gráfico de distribuição */}
        </div>
      </div>
    </div>
  );
}
