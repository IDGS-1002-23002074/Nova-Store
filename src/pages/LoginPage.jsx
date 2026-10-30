import { useState } from "react";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./pages.css";
export function LoginPage() {
  const [email, setEmail] = useState("usuario@nova.com");
  const [password, setPassword] = useState("user123");
  const { login, user, error } = useAuth();
  const nav = useNavigate();
  const location = useLocation();
  if (user) return <Navigate to="/cuenta" replace />;
  const submit = (e) => {
    e.preventDefault();
    if (login(email, password))
      nav(location.state?.from || "/cuenta", { replace: true });
  };
  return (
    <section className="login-wrap">
      <form className="login-card" onSubmit={submit}>
        <span className="eyebrow">WELCOME TO NOVA</span>
        <h1>Qué bueno tenerte aquí.</h1>
        <p>Inicia sesión para guardar tus favoritos y acceder a tu espacio.</p>
        <label>
          Correo
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button className="button">Entrar a mi cuenta</button>
        <aside>
          <b>Accesos de demostración</b>
          <br />
          Cliente: usuario@nova.com / user123
          <br />
          Admin: admin@nova.com / admin123
        </aside>
        <Link to="/">Volver al catálogo</Link>
      </form>
    </section>
  );
}
