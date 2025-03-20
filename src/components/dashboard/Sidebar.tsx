"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaRobot, FaChartBar, FaCog, FaUsers } from 'react-icons/fa';

const menuItems = [
  { icon: FaHome, label: 'Dashboard', path: '/dashboard' },
  { icon: FaRobot, label: 'Chatbots', path: '/dashboard/chatbots' },
  { icon: FaChartBar, label: 'Analytics', path: '/dashboard/analytics' },
  { icon: FaUsers, label: 'Equipe', path: '/dashboard/team' },
  { icon: FaCog, label: 'Configurações', path: '/dashboard/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white h-screen shadow-sm fixed left-0 top-16">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                    isActive 
                      ? 'bg-roxo-medio text-white' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
