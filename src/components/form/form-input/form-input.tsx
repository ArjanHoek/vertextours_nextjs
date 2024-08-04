import { InputHTMLAttributes } from "react";

type FormInputProps = {
  label: string;
  name: string;
  type?: string;
};

export default function FormInput({
  label,
  type = "text",
  name,
}: FormInputProps) {
  return (
    <label className="flex flex-col relative mt-3">
      <span className="absolute bg-neutral-600 rounded text-white font-light px-2 left-4 -translate-y-3">
        {label}
      </span>
      <input
        required
        className="outline-none border-2 border-neutral-200 p-4 rounded-md"
        type={type}
        name={name}
      />
    </label>
  );
}
