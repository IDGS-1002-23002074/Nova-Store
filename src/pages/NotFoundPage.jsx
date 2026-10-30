import { Link } from "react-router-dom";
import "./pages.css";
export function NotFoundPage() {
  return (
    <section className="empty">
      <h1>404</h1>
      <h2>Esta página no existe.</h2>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}
