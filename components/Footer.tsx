export default function Footer() {
  return (
    <>
      <footer className="footer">
        <p>© 2023, GetthisGreen demo, built with ❤️ & 🎧</p>
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
        `}
      </style>
    </>
  );
}
