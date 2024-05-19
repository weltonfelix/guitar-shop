interface InputProps {
  label: string;
  id: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}

export function Input({ label, id, type, required, autoComplete }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="bg-slate-200 p-2 rounded-lg"
      />
    </div>
  );
}
