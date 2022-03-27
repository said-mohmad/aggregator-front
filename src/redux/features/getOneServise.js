const initialState = {
    oneServise: [],
    loading: false,
    error: false,
  };
  
  export default function oneServise (state = initialState, action) {
    switch (action.type) {
      // Обработка события на выведение одной новости
  
      case "oneServise/fetch-oneServise/pending":
        return {
          ...state,
          loading: true,
        };
      case "oneServise/fetch-oneServise/fulfilled":
        return {
          ...state,
          oneServise: [action.payload],
          loading: false,
        };
      case "oneServise/fetch-oneServise/rejected":
        return {
          ...state,
          error: true,
          loading: false,
        };
      default:
        return state;
    }
  }
  
  export const getOneServise = (id) => {
    return async (dispatch) => {
      dispatch({ type: "oneServise/fetch-oneServise/pending" });
      try {
        const response = await fetch(`http://localhost:4000/services/${id}`);
        const oneServise = await response.json();

        dispatch({
          type: "oneServise/fetch-oneServise/fulfilled",
          payload: oneServise,
        });
      } catch (e) {
        dispatch({
          type: "oneServise/fetch-oneServise/rejected",
          error: e.toString(),
        });
      }
    };
  };
  