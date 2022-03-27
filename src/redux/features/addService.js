import services from "./services";

const initialState = {
  loading: false,
  service: [],
  error: null,
};

export const addService = (state = initialState, action) => {
  switch (action.type) {
    case "addService/fetch/pending":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "addService/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        error: null,
        service: action.payload,
      };
    case "addService/fetch/rejected":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addedService = (name, description, price, category) => {
  return async (dispatch) => {
    dispatch({ type: "addService/fetch/pending" });
    try {
      const response = await fetch("http://localhost:4000/services", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          serviceName: name,
          description,
          price,
          categoryId: category
        }),
      });
      const json = await response.json();
      if (json.error) {
        dispatch({ type: "addService/fetch/rejected", payload: json.error });
      } else {
        dispatch({ type: "addService/fetch/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({ type: "addService/fetch/rejected", payload: e.toString() });
    }
  };
};
