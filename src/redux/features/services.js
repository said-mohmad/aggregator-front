const initialState = {
  loading: true,
  services: [],
  error: null
};

export default function services(state = initialState, action) {
  switch (action.type) {
    case "services/fetch/pending":
      return {
        ...state,
        loading: true
      };
    case "services/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        services: action.payload
      };
    case "services/fetch/rejected":
      return {
        ...state,
        loading: false,
        services: [],
        error: action.error
      };
    default:
      return state;
  }
}

export const fetchCarts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "services/fetch/pending" });
    try {
      const response = await fetch("http://localhost:4000/services", {
        headers: {
          "Content-type": "application/json"
        }
      });
      const json = await response.json();
      if (json.error) {
        dispatch({ type: "services/fetch/rejected", payload: json.error });
      } else {
        dispatch({ type: "services/fetch/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({ type: "services/fetch/rejected", error: e.toString() });
    }
  };
};

// export const fetchExecutor = () => {
//   return async (dispatch, getState) => {
//     dispatch({ type: "executor/fetch/pending" });
//     try {
//       const response = await fetch("http://localhost:4000/executors", {
//         headers: {
//           "Content-type": "application/json",
//         },
//       });
//       const json = await response.json();
//       if (json.error) {
//         dispatch({ type: "executor/fetch/rejected", payload: json.error });
//       } else {
//         dispatch({ type: "executor/fetch/fulfilled", payload: json });
//       }
//     } catch (e) {
//       dispatch({ type: "executor/fetch/rejected", error: e.toString() });
//     }
//   };
// };
