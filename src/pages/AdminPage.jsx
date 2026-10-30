import "./pages.css";
export function AdminPage() {
  return (
    <section className="catalog">
      <span className="eyebrow">NOVA CONTROL CENTER</span>
      <h1>Panel de administración</h1>
      <p className="muted">Acceso exclusivo para el rol administrador.</p>
      <div className="admin-panel">
        <b>✓ Ruta protegida y autorizada</b>
        <p>
          La ruta /admin comprueba la sesión y el rol admin mediante
          ProtectedRoute.
        </p>
      </div>
    </section>
  );
}
