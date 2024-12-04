import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";

export default function ErrorPage() {
  return (
    <>
      <Nav />
      <main>
        <h1>This page does not exist.</h1>
        <Link to="/">Click here to go back to the home page.</Link>
      </main>
    </>
  );
}
