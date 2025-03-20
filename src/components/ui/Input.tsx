import { InputHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  "w-full rounded-md border border-gray-300 shadow-sm transition-colors",
  {
    variants: {
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2",
        lg: "px-4 py-3 text-lg",
      },
      variant: {
        default: "bg-white focus:border-roxo-medio focus:ring-1 focus:ring-roxo-medio",
        error: "bg-red-50 border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  error?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, variant, error, label, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={inputVariants({ size, variant: error ? "error" : variant, className })}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
