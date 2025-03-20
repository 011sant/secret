import { ReactNode } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';

type AlertVariant = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  variant: AlertVariant;
  title?: string;
  children: ReactNode;
}

const alertStyles = {
  success: {
    bg: 'bg-green-50',
    border: 'border-green-400',
    text: 'text-green-800',
    icon: FaCheckCircle,
    iconColor: 'text-green-400',
  },
  error: {
    bg: 'bg-red-50',
    border: 'border-red-400',
    text: 'text-red-800',
    icon: FaTimesCircle,
    iconColor: 'text-red-400',
  },
  warning: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-400',
    text: 'text-yellow-800',
    icon: FaExclamationTriangle,
    iconColor: 'text-yellow-400',
  },
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-400',
    text: 'text-blue-800',
    icon: FaInfoCircle,
    iconColor: 'text-blue-400',
  },
};

export default function Alert({ variant, title, children }: AlertProps) {
  const style = alertStyles[variant];
  const Icon = style.icon;

  return (
    <div className={`${style.bg} ${style.border} border-l-4 p-4 rounded-r-md`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={`h-5 w-5 ${style.iconColor}`} />
        </div>
        <div className="ml-3">
          {title && (
            <h3 className={`text-sm font-medium ${style.text}`}>
              {title}
            </h3>
          )}
          <div className={`text-sm ${style.text}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
