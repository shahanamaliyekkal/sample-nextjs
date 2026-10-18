import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold" href="/">
          Ecom<span className="brand-dot">.</span>
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link" href="/">
            Home
          </Link>

          <Link className="nav-link" href="/about">
            About
          </Link>

          <Link className="nav-link" href="/products">
            Products
          </Link>
          
          <Link className="nav-link" href="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}