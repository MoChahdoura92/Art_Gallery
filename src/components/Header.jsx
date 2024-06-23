import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1 className="text-3xl font-bold underline">ReactArt</h1>
      <p className="font-semibold text-indigo-600 text-gray-100">
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
