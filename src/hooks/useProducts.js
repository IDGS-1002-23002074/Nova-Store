import { useState } from "react";
import { useAsyncEffect } from "./useAsyncEffect";
export function useProducts() {
  const [products, setProducts] = useState([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState("");
  useAsyncEffect(async (isActive) => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=30");
      if (!response.ok) throw new Error("No se pudo cargar el catálogo");
      const data = await response.json();
      if (isActive()) setProducts(data.products || []);
    } catch (e) {
      if (isActive()) setError(e.message);
    } finally {
      if (isActive()) setLoading(false);
    }
  }, []);
  return { products, loading, error };
}
