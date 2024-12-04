import insta from "../images/instagram.png";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://www.instagram.com/noahmailloux/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={insta} alt="Instagram" className="icon" />
      </a>
      <div>Website by Noah Mailloux</div>
    </footer>
  );
}
