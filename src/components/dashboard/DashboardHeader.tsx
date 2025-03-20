"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaBell, FaUserCircle } from 'react-icons/fa';

export default function DashboardHeader() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white h-16 fixed w-full z-40 border-b">
      <div className="h-full px-4 flex items-center justify-between">
        <Link href="/dashboard" className="text-xl font-bold text-roxo-escuro">
          Specter
        </Link>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <FaBell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-roxo-medio rounded-full" />
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md"
            >
              <FaUserCircle className="w-6 h-6 text-gray-600" />
              <span className="text-sm font-medium">Admin</span>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <Link href="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Perfil
                </Link>
                <Link href="/dashboard/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Configurações
                </Link>
                <hr className="my-1" />
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
