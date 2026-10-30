import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./pages.css";
export function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useLocalStorage("nova-favorites", []);
  useEffect(() => {
    let active = true;
    fetch(`https://dummyjson.com/products/${id}`)
      .then((r) => {
        if (!r.ok) throw Error("Producto no encontrado");
        return r.json();
      })
      .then((d) => {
        if (active) setProduct(d);
      })
      .catch((e) => {
        if (active) setError(e.message);
      });
    return () => {
      active = false;
    };
  }, [id]);
  if (error) return <p className="message error">{error}</p>;
  if (!product) return <p className="message">Cargando producto...</p>;
  const fav = favorites.includes(Number(id));
  return (
    <section className="detail">
      <Link to="/">← Volver al catálogo</Link>
      <div className="detail-card">
        <img src={product.thumbnail} alt={product.title} />
        <div>
          <span className="eyebrow">{product.category}</span>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <strong>${product.price}</strong>
          <button
            className="button"
            onClick={() =>
              setFavorites((old) =>
                fav
                  ? old.filter((x) => x !== Number(id))
                  : [...old, Number(id)],
              )
            }
          >
            {fav ? "Quitar de favoritos" : "Guardar en favoritos"}
          </button>
        </div>
      </div>
    </section>
  );
}
