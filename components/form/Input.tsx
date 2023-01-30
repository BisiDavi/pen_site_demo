import type { FormElementType } from "@/types";

interface Props{
    input: FormElementType
}

export default function Input({ input }:Props) {
  return (
    <div className="form-element">
      <label>{input.label}</label>
      <input name={input.name} type={input.contentType} />
    </div>
  );
}
