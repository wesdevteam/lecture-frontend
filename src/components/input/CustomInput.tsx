import type { InputHTMLAttributes } from "react";

interface CustomInputI extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "prefix" | "suffix"
> {
  label: string;
  type?: string;
  parentClass?: string;
  inputClass?: string;
}

export default function CustomInput({
  parentClass,
  label,
  type = "string",
  inputClass,
  ...props
}: CustomInputI) {
  return (
    <div className={`w-65 flex flex-col ${parentClass}`}>
      <label className="text-base">{label}</label>
      <input
        type={type}
        className={`bg-primary rounded-sm text-white px-4 py-2 border-0 outline-0 ${inputClass}`}
        {...props}
      />
    </div>
  );
}
