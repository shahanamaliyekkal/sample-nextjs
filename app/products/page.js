import Link from "next/link";
export const metadata = {
  title: "Products",
  description: "Our products page",
};
export default async function Products() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return (
    <div className="products-page">
      <h1 className="products-title">Our Products</h1>
      <p className="products-subtitle">
        Discover products you'll love.
      </p>

      <div className="products-grid">
        {data.map((prod) => (
          <div className="product-card" key={prod.id}>
            <div className="product-image">
              <img src={prod.image} alt={prod.title} />
            </div>

            <div className="product-info">
              <h3>{prod.title}</h3>

              <p className="product-price">
                ${prod.price.toFixed(2)}
              </p>

              <Link
                href={`/products/${prod.id}`}
                className="product-button"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
