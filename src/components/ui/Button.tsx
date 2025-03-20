import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-roxo-medio text-white hover:bg-roxo-escuro focus:ring-roxo-medio",
        secondary: "bg-white text-roxo-escuro border-2 border-roxo-medio hover:bg-roxo-medio hover:text-white",
        outline: "border border-white text-white hover:bg-white/10",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant,
  size,
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, fullWidth, className })}
      {...props}
    >
      {children}
    </button>
  );
}
