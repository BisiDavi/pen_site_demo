import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="header">
        <Image alt="logo" src="/logo.webp" height={100} width={300} />
      </header>
      <style jsx>
        {`
          .header {
            background-color: white;
            height: 100px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 5px 15px rgb(0 0 0 / 15%);
          }
        `}
      </style>
    </>
  );
}
