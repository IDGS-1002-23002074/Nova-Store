import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";
import "./pages.css";
export function FavoritesPage() {
  const [favorites, setFavorites] = useLocalStorage("nova-favorites", []);
  const { products, loading, error } = useProducts();
  const saved = products.filter((p) => favorites.includes(p.id));
  const remove = (id) => setFavorites((old) => old.filter((x) => x !== id));
  return (
    <section className="catalog">
      <span className="eyebrow">YOUR COLLECTION</span>
      <h1>Mis favoritos</h1>
      <p className="muted">Todo lo que guardaste, en un solo lugar.</p>
      {loading && <p className="message">Cargando...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !saved.length && (
        <div className="empty">
          Aún no tienes favoritos. <Link to="/">Explora el catálogo</Link>
        </div>
      )}
      <div className="grid">
        {saved.map((p) => (
          <ProductCard key={p.id} product={p} favorite onToggle={remove} />
        ))}
      </div>
    </section>
  );
}
