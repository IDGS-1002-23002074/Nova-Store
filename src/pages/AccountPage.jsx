import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./pages.css";
export function AccountPage() {
  const { user } = useAuth();
  return (
    <section className="catalog">
      <span className="eyebrow">MY NOVA</span>
      <h1>Tu espacio personal</h1>
      <div className="account-card">
        <div className="avatar">{user.name[0]}</div>
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <small>
            Rol: {user.role === "admin" ? "Administrador" : "Cliente"}
          </small>
        </div>
      </div>
      <p>
        <Link to="/favoritos">Ver mis favoritos →</Link>
      </p>
      {user.role === "admin" && (
        <Link to="/admin">Panel de administración →</Link>
      )}
    </section>
  );
}
