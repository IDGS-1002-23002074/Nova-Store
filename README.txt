NOVA STORE - PROYECTO REACT
API pública: https://dummyjson.com/products 


CUENTAS DE DEMOSTRACIÓN:
Administrador: admin@nova.com / admin123
Cliente: usuario@nova.com / user123

RUTAS:
 /             catálogo público
 /producto/:id detalle de producto
 /login        inicio de sesión
 /favoritos    protegida: requiere sesión
 /cuenta       protegida: requiere sesión
 /admin        protegida y autorizada: solo rol admin

REQUISITOS IMPLEMENTADOS:
- Plantilla organizada en components, context, hooks, pages, reducers, routes y styles.
- Estilos globales en src/styles/global.css y estilos individuales junto a componentes.
- Fragment (<>...</>) en componentes.
- useState en búsqueda, filtros y formularios.
- useEffect en detalle de producto y persistencia.
- asyncEffect: hook personalizado useAsyncEffect en src/hooks/useAsyncEffect.js.
- localStorage para sesión y favoritos.
- React Router con BrowserRouter, Routes y Route.
- Link y NavLink para navegación.
- AuthReducer en src/reducers/authReducer.js.
- Context y useReducer en src/context/AuthContext.jsx.
- Rutas protegidas y autorizadas en src/routes/ProtectedRoute.jsx.
