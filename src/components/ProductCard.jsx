import { Link } from "react-router-dom";
import { Heart, Star, ArrowUpRight } from "lucide-react";
import "./ProductCard.css";
export function ProductCard({ product, favorite, onToggle }) {
  return (
    <article className="product-card">
      <div className="product-photo">
        <span className="tag">{product.category}</span>
        <button
          className={favorite ? "heart active" : "heart"}
          onClick={() => onToggle(product.id)}
          aria-label="Cambiar favorito"
        >
          <Heart size={17} fill={favorite ? "currentColor" : "none"} />
        </button>
        <Link to={`/producto/${product.id}`}>
          <img src={product.thumbnail} alt={product.title} />
        </Link>
      </div>
      <div className="product-info">
        <div className="meta">
          <span>{product.brand || "Nova edit"}</span>
          <span>
            <Star size={12} fill="currentColor" /> {product.rating}
          </span>
        </div>
        <Link className="product-name" to={`/producto/${product.id}`}>
          {product.title}
        </Link>
        <div className="price-row">
          <b>${product.price}</b>
          <Link className="arrow" to={`/producto/${product.id}`}>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}
