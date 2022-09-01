import { createContext, useReducer } from "react";

const initial_state = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(initial_state);

// create reducer
const SearchReducer = (state, action) => {
  switch (action.type) {
    case "new_search":
      return action.payload; // payload is gonna be our destination date range and options
    case "reset_search":
      return initial_state;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  // state and dispatch its come from reducer, and we're gonna use useReducer hook
  const [state, dispatch] = useReducer(SearchReducer, initial_state);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
