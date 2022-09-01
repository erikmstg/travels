import { createContext, useReducer, useEffect } from "react";

const initial_state = {
  user: JSON.parse(localStorage.getItem("user")) || null, //firstly, check user data at localStorage. but if thereis no user, its gonna be null
  loading: false, // when user try to click on login button its gonna be true
  error: null, // at the beginning its gonna be null
};

export const AuthContext = createContext(initial_state);

// create reducer
const AuthReducer = (state, action) => {
  switch (action.type) {
    // first case
    case "login_start": // when click login button, were going to run this action type
      return {
        user: null,
        loading: true,
        error: null,
      };

    // second case
    case "login_success":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };

    // third case
    case "login_failure":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };

    // logout case
    case "logout":
      return initial_state;

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  // state and dispatch its come from reducer, and we're gonna use useReducer hook
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  // to save user info to local storage. when user refresh page, user didnt logout
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]); // whenever it changes, were going to update local storage

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
