import type { formElementType } from "@/types";

interface Props {
  content: formElementType;
}

export default function Input({ content }: Props) {
  return (
    <>
      <div className="input">
        <input
          name={content.name}
          type={content.contentType}
          placeholder={content.label}
        />
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
