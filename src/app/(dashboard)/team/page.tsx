"use client";

import { useState } from 'react';
import { FaUserPlus, FaEdit, FaTrash } from 'react-icons/fa';

interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

export default function Team() {
  const [members] = useState<TeamMember[]>([
    { id: 1, name: 'João Silva', email: 'joao@specter.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Maria Santos', email: 'maria@specter.com', role: 'Editor', status: 'active' },
    { id: 3, name: 'Pedro Costa', email: 'pedro@specter.com', role: 'Viewer', status: 'inactive' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Equipe</h1>
        <button className="flex items-center space-x-2 bg-roxo-medio text-white px-4 py-2 rounded-md hover:bg-roxo-escuro">
          <FaUserPlus className="w-4 h-4" />
          <span>Adicionar Membro</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Função
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {members.map((member) => (
              <tr key={member.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{member.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{member.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{member.role}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    member.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {member.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-roxo-medio hover:text-roxo-escuro mx-2">
                    <FaEdit className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <FaTrash className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
