"use client";

import { useState } from 'react';
import { FaBell, FaLock, FaUser, FaPalette } from 'react-icons/fa';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      marketing: false
    },
    theme: 'light',
    language: 'pt-BR'
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Configurações</h1>
      
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'profile', label: 'Perfil', icon: FaUser },
              { id: 'notifications', label: 'Notificações', icon: FaBell },
              { id: 'security', label: 'Segurança', icon: FaLock },
              { id: 'appearance', label: 'Aparência', icon: FaPalette },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 px-1 ${
                  activeTab === tab.id
                    ? 'border-roxo-medio text-roxo-medio'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'notifications' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Preferências de Notificação</h3>
              <div className="space-y-4">
                {Object.entries(settings.notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-gray-700 capitalize">{key}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            notifications: {
                              ...settings.notifications,
                              [key]: e.target.checked
                            }
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-roxo-medio/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-roxo-medio"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Aparência</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Tema</span>
                  <select
                    value={settings.theme}
                    onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
                    className="border rounded-md px-3 py-2"
                  >
                    <option value="light">Claro</option>
                    <option value="dark">Escuro</option>
                    <option value="system">Sistema</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Idioma</span>
                  <select
                    value={settings.language}
                    onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                    className="border rounded-md px-3 py-2"
                  >
                    <option value="pt-BR">Português (BR)</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
