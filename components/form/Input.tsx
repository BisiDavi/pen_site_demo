import type { formElementType } from "@/types";

interface Props {
  content: formElementType;
}

export default function Input({ content }: Props) {
  return (
    <div className="form-element">
      <label>{content.label}</label>
      <input name={content.name} type={content.contentType} />
    </div>
  );
}
