export default function Footer() {
  return (
    <>
      <footer className="footer">
        <p>
          © 2023, GetthisGreen demo, built with ❤️ & 🎧 by{" "}
          <a
            href="https://olubisi-david.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            Dave
          </a>
        </p>
      </footer>
      <style jsx>
        {`
          .footer {
            background-color: green;
            color: white;
            height: 40px;
            padding: 20px 40px;
            font-style: italic;
            font-family: "Roboto Mono", sans-serif;
          }

          .footer a {
            font-weight: bold;
            color: white;
          }
        `}
      </style>
    </>
  );
}
