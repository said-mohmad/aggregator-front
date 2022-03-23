const initialState = {
  loading: false,
  text: [],
  error: null,
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case "carts/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "carts/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        text: action.payload,
      };
    case "carts/fetch/rejected":
      return {
        ...state,
        loading: false,
        text: [],
        error: action.error,
      };
    default:
      return state;
  }
}

export const fetchCarts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "carts/fetch/pending" });
    try {
      const response = await fetch("http://localhost:4000/service", {
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await response.json();
      if (json.error) {
        dispatch({ type: "carts/fetch/rejected", payload: json.error });
      } else {
        dispatch({ type: "carts/fetch/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({ type: "carts/fetch/rejected", error: e.toString() });
    }
  };
};
