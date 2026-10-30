import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, LogOut, UserRound } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import "./Layout.css";
export function Layout({ children }) {
  const { user, logout } = useAuth(),
    navigate = useNavigate();
  return (
    <>
      <header className="header">
        <div className="nav">
          <Link to="/" className="logo">
            <span className="mark">
              <ShoppingBag />
            </span>
            NOVA<span>STORE</span>
          </Link>
          <nav>
            <NavLink to="/" end>
              Descubrir
            </NavLink>
            {user && <NavLink to="/favoritos">Favoritos</NavLink>}
            {user?.role === "admin" && <NavLink to="/admin">Admin</NavLink>}
          </nav>
          <div className="nav-user">
            {user ? (
              <>
                <Link to="/cuenta" className="account">
                  {user.name.split(" ")[0]}
                </Link>
                <button
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  aria-label="Cerrar sesión"
                >
                  <LogOut size={17} />
                </button>
              </>
            ) : (
              <Link to="/login">
                <UserRound size={16} /> Iniciar sesión
              </Link>
            )}
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        {" "}
        NOVA STORE · Descubre algo nuevo{" "}
        <span>Catálogo de demostración con DummyJSON</span>
      </footer>
    </>
  );
}
