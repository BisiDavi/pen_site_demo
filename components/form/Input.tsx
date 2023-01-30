import { useFormContext } from "react-hook-form";
import type { formElementType } from "@/types";

interface Props {
  content: formElementType;
}

export default function Input({ content }: Props) {
  const {
    register,
    formState: { errors },
  }: any = useFormContext();
  return (
    <>
      <div className="input">
        <input
          type={content.contentType}
          placeholder={content.label}
          {...register(content.name)}
        />
        <p className="text-red-500 p-0  text-xs">
          {errors[content.name]?.message}
        </p>
      </div>
      <style jsx>
        {`
          .input {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 4px 0px;
          }
          .input input {
            padding: 0px 10px;
            height: 30px;
          }
        `}
      </style>
    </>
  );
}
