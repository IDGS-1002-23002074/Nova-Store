export const initialAuthState = { user: null, status: "anonymous", error: "" };
export function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { user: action.payload, status: "authenticated", error: "" };
    case "LOGIN_ERROR":
      return { ...state, error: action.payload };
    case "LOGOUT":
      return initialAuthState;
    default:
      return state;
  }
}
