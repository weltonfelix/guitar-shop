import { ChangeEventHandler } from "react";

interface InputProps {
  label: string;
  id: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

export function Input({
  label,
  id,
  type,
  required,
  autoComplete,
  onChange,
  value,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        onChange={onChange}
        value={value}
        className="bg-slate-200 p-2 rounded-lg"
      />
    </div>
  );
}
