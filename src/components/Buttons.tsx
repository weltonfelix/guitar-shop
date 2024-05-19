import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

interface GenericButtonProps {
  className?: string;
  children: React.ReactNode;
}

interface LinkButtonProps extends GenericButtonProps {
  to: string;
}

export function LinkButton({ to, children, className }: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={`bg-slate-700 hover:bg-slate-600 transition-colors text-slate-50 font-bold p-2 rounded-lg text-center ${className}`}
    >
      {children}
    </Link>
  );
}

interface ButtonProps extends GenericButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export function Button({ onClick, type, children, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type || 'button'}
      className={`bg-slate-700 hover:bg-slate-600 transition-colors text-slate-50 font-bold p-2 rounded-lg text-center ${className}`}
    >
      {children}
    </button>
  );
}
