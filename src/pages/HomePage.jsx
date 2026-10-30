import { useMemo, useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { useProducts } from "../hooks/useProducts";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ProductCard } from "../components/ProductCard";
import "./pages.css";
export function HomePage() {
  const { products, loading, error } = useProducts();
  const [favorites, setFavorites] = useLocalStorage("nova-favorites", []);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const categories = useMemo(
    () => ["all", ...new Set(products.map((p) => p.category))],
    [products],
  );
  const shown = products.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "all" || p.category === category),
  );
  const toggle = (id) =>
    setFavorites((old) =>
      old.includes(id) ? old.filter((x) => x !== id) : [...old, id],
    );
  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">
            <Sparkles size={14} /> THE EVERYDAY EDIT
          </span>
          <h1>
            Encuentra eso
            <br />
            <em>que te inspira.</em>
          </h1>
          <p>
            Objetos, tecnología y pequeños esenciales seleccionados para
            acompañar tu día.
          </p>
          <a className="button" href="#catalogo">
            Explorar colección ↓
          </a>
        </div>
        <div className="hero-orb">
          <b>N</b>
          <span>
            NOVA
            <br />
            COLLECTION
          </span>
        </div>
      </section>
      <section className="catalog" id="catalogo">
        <div className="heading">
          <div>
            <span className="eyebrow">CURATED FOR YOU</span>
            <h2>Descubre la colección</h2>
            <p>Una selección que vale la pena conocer.</p>
          </div>
          <small>{shown.length} productos</small>
        </div>
        <div className="filters">
          <label>
            <Search size={17} />
            <input
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === "all" ? "Todas las categorías" : c}
              </option>
            ))}
          </select>
        </div>
        {loading && <p className="message">Cargando catálogo...</p>}
        {error && <p className="message error">{error}</p>}
        <div className="grid">
          {shown.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              favorite={favorites.includes(p.id)}
              onToggle={toggle}
            />
          ))}
        </div>
      </section>
    </>
  );
}
