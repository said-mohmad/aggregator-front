const initialState = {
    categories: [],
    loading: false,
    error: null,
};
  
  export default function Categories (state = initialState, action) {
    switch (action.type) {
      case "category/fetch/pending":
        return {
          ...state,
          loading: true,
        };
      case "category/fetch/fulfilled":
        return {
          ...state,
          loading: false,
          categories: action.payload,
        };
      case "category/fetch/rejected":
        return {
          ...state,
          loading: false,
          categories: [],
          error: action.error,
        };
      default:
        return state;
    }
  }
  
  export const fetchCategories = () => {
    return async (dispatch, getState) => {
      dispatch({ type: "category/fetch/pending" });
      try {
        const response = await fetch("http://localhost:4000/category/");
        const json = await response.json();
        if (json.error) {
          dispatch({ type: "category/fetch/rejected", payload: json.error });
        } else {
          dispatch({ type: "category/fetch/fulfilled", payload: json });
        }
      } catch (e) {
        dispatch({ type: "category/fetch/rejected", error: e.toString() });
      }
    };
  };
  