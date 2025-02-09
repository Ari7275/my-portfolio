import ProductCard from "./ProductCard";
import { paintings } from "../../data/paintings";

export default function Products() {
  return (
    <section className="gallery-container">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            Gallery Collection
          </h2>
          <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto">
            Explore our curated collection of original oil paintings, each piece telling its own unique story through color and texture.
          </p>
        </header>
        
        <div className="gallery-grid">
          {paintings.map((painting, index) => (
            <ProductCard key={index} {...painting} />
          ))}
        </div>
      </div>
    </section>
  );
} 