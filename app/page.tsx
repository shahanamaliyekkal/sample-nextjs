import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Ecom<span>.</span></h1>
      <p>Discover products you'll love at great prices.</p>
      <Link href="/products" className="home-button">
        Explore Products
      </Link>
    </div>
  );
}
