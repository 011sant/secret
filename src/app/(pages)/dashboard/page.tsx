import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-roxo-escuro">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-roxo-escuro dark:text-white">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Bem-vindo de volta! Aqui está um resumo das suas atividades.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <button className="btn-primary">
              Adicionar App
            </button>
            <button className="border border-roxo-medio text-roxo-medio hover:bg-roxo-medio hover:text-white transition-colors duration-300 px-4 py-2 rounded-md">
              Configurações
            </button>
          </div>
        </div>
        
        {/* Estatísticas rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {['Apps Ativos', 'Interações Restantes', 'Alertas', 'Tarefas Pendentes'].map((stat, i) => (
            <div key={i} className="card flex justify-between items-center">
              <div>
                <h3 className="text-sm text-gray-500 dark:text-gray-400">{stat}</h3>
                <p className="text-2xl font-bold text-roxo-escuro dark:text-white">
                  {i === 0 && '4'}
                  {i === 1 && '742'}
                  {i === 2 && '2'}
                  {i === 3 && '5'}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                i === 0 ? 'bg-roxo-medio bg-opacity-20' :
                i === 1 ? 'bg-sucesso bg-opacity-20' :
                i === 2 ? 'bg-erro bg-opacity-20' :
                'bg-neutro bg-opacity-20'
              }`}>
                <span className="text-xl">
                  {i === 0 && '📱'}
                  {i === 1 && '💬'}
                  {i === 2 && '🔔'}
                  {i === 3 && '📋'}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Widgets principais */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Widget de gráfico */}
          <div className="card lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-roxo-escuro dark:text-white">
                Uso de Apps (últimos 7 dias)
              </h2>
              <select className="text-sm border border-gray-300 dark:border-roxo-medio rounded-md p-1">
                <option>7 dias</option>
                <option>30 dias</option>
                <option>90 dias</option>
              </select>
            </div>
            
            {/* Placeholder para gráfico */}
            <div className="bg-gray-100 dark:bg-roxo-escuro h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Gráfico de Uso (seria implementado com Recharts)</p>
            </div>
          </div>
          
          {/* Widget de notificações */}
          <div className="card">
            <h2 className="text-lg font-bold text-roxo-escuro dark:text-white mb-4">
              Notificações Recentes
            </h2>
            
            <div className="space-y-4">
              {['Alerta de segurança', 'Nova atualização disponível', 'Seu plano expira em 7 dias', 'Novo app compatível'].map((notification, i) => (
                <div key={i} className={`p-3 rounded-md ${
                  i === 0 ? 'bg-erro bg-opacity-10 border-l-4 border-erro' :
                  i === 1 ? 'bg-sucesso bg-opacity-10 border-l-4 border-sucesso' :
                  i === 2 ? 'bg-roxo-medio bg-opacity-10 border-l-4 border-roxo-medio' :
                  'bg-gray-100 dark:bg-roxo-escuro'
                }`}>
                  <div className="flex justify-between">
                    <p className="font-medium text-roxo-escuro dark:text-white">{notification}</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {i === 0 && 'Agora'}
                      {i === 1 && '2h atrás'}
                      {i === 2 && '1d atrás'}
                      {i === 3 && '3d atrás'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {i === 0 && 'Detectamos uma tentativa de login incomum.'}
                    {i === 1 && 'Nova versão v2.3 disponível com melhorias.'}
                    {i === 2 && 'Renove agora para manter seus apps ativos.'}
                    {i === 3 && 'Um novo app que combina com seu perfil foi adicionado.'}
                  </p>
                </div>
              ))}
            </div>
            
            <button className="text-roxo-medio hover:underline text-sm mt-4 w-full text-center">
              Ver todas as notificações
            </button>
          </div>
        </div>
        
        {/* Apps ativos */}
        <div className="card mb-8">
          <h2 className="text-lg font-bold text-roxo-escuro dark:text-white mb-6">
            Seus Apps Ativos
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-roxo-escuro">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Nome do App
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Uso Este Mês
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Última Atividade
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {['Chatbot de Atendimento', 'Analytics de Vendas', 'Gestor Financeiro', 'Automação de Email'].map((app, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-roxo-escuro">
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-roxo-medio flex items-center justify-center text-white mr-3">
                          {app.charAt(0)}
                        </div>
                        <span className="font-medium text-roxo-escuro dark:text-white">{app}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        i % 3 === 0 
                          ? 'bg-sucesso bg-opacity-20 text-sucesso' 
                          : i % 3 === 1 
                            ? 'bg-roxo-medio bg-opacity-20 text-roxo-medio' 
                            : 'bg-gray-200 dark:bg-roxo-escuro text-gray-600 dark:text-gray-300'
                      }`}>
                        {i % 3 === 0 ? 'Ativo' : i % 3 === 1 ? 'Em Uso' : 'Inativo'}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-600 dark:text-gray-300">
                      {i === 0 && '86%'}
                      {i === 1 && '42%'}
                      {i === 2 && '13%'}
                      {i === 3 && '0%'}
                    </td>
                    <td className="px-4 py-4 text-gray-600 dark:text-gray-300">
                      {i === 0 && 'Hoje'}
                      {i === 1 && 'Ontem'}
                      {i === 2 && '3 dias atrás'}
                      {i === 3 && '2 semanas atrás'}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex space-x-2">
                        <button className="text-roxo-medio hover:text-roxo-escuro dark:hover:text-white">
                          Configurar
                        </button>
                        <span className="text-gray-300 dark:text-gray-600">|</span>
                        <button className="text-gray-500 dark:text-gray-400 hover:text-roxo-medio">
                          Desativar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* KPIs e Metas */}
        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-roxo-escuro dark:text-white">
              Suas Metas
            </h2>
            <button className="text-sm text-roxo-medio hover:underline">
              Adicionar Nova Meta
            </button>
          </div>
          
          <div className="space-y-6">
            {['Interações com Clientes', 'Conversão de Vendas', 'Tempo de Resposta'].map((goal, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-roxo-escuro dark:text-white">{goal}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {i === 0 && '420/500'}
                    {i === 1 && '8.5/10%'}
                    {i === 2 && '3.2/2 min'}
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-roxo-escuro rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      i === 0 
                        ? 'bg-roxo-medio w-4/5' 
                        : i === 1 
                          ? 'bg-sucesso w-5/6' 
                          : 'bg-erro w-2/3'
                    }`}
                  ></div>
                </div>
                
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {i === 0 && 'Meta: 500 interações mensais'}
                  {i === 1 && 'Meta: 10% de conversão'}
                  {i === 2 && 'Meta: 2 minutos (meta não atingida)'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}