import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-around p-4 bg-red-500/90 sticky z-1 top-0 backdrop-blur-sm drop-shadow-md font-kota" >
      <h1 className="text-2xl font-bold">
        <Link to="/" href="">Power</Link>
      </h1>
      <ul className="flex items-center justify-around w-[45%] text-sm">
        <li>
          <Link to="/others" href="">Others</Link>
        </li>
        <li>
          <Link to="/quotes" href="">Quotes</Link>
        </li>
      </ul>
    </div>
  );
}
