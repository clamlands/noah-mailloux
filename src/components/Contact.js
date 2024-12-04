import { useEffect } from "react";
export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="contact">
      <h1 className="pink">Contact</h1>

      <p>
        Send an email to <b>noah.mailloux1@gmail.com</b> or message me on{" "}
        <a
          href="https://www.instagram.com/noahmailloux/"
          className="insta-link"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        .
      </p>
    </main>
  );
}
