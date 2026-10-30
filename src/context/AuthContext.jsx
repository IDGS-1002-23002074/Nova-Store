import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer, initialAuthState } from "../reducers/authReducer";
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(
    authReducer,
    initialAuthState,
    (initial) => {
      try {
        const saved = localStorage.getItem("nova-session");
        return saved
          ? { ...initial, user: JSON.parse(saved), status: "authenticated" }
          : initial;
      } catch {
        return initial;
      }
    },
  );
  useEffect(() => {
    if (state.user)
      localStorage.setItem("nova-session", JSON.stringify(state.user));
    else localStorage.removeItem("nova-session");
  }, [state.user]);
  const login = (email, password) => {
    const accounts = [
      {
        email: "admin@nova.com",
        password: "admin123",
        name: "Alex Morgan",
        role: "admin",
      },
      {
        email: "usuario@nova.com",
        password: "user123",
        name: "Sam Rivera",
        role: "user",
      },
    ];
    const found = accounts.find(
      (a) => a.email === email.trim().toLowerCase() && a.password === password,
    );
    if (!found) {
      dispatch({
        type: "LOGIN_ERROR",
        payload: "Correo o contraseña incorrectos.",
      });
      return false;
    }
    const { password: _password, ...user } = found;
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
    return true;
  };
  return (
    <AuthContext.Provider
      value={{ ...state, login, logout: () => dispatch({ type: "LOGOUT" }) }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth requiere AuthProvider");
  return value;
}
