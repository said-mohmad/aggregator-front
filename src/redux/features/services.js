const initialState = {
  loading: true,
  services: [],
  error: null,
  executor: [],
  executors: []
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
    case "executor/fetch/pending":
      return {
        ...state,
        loading: true
      };
    case "executor/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        executors: action.payload
      };
    case "executor/fetch/rejected":
      return {
        ...state,
        loading: false,
        executors: [],
        error: action.error
      };
    case "executorById/fetch/pending":
      return {
        ...state,
        loading: true
      };
    case "executorById/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        executor: action.payload
      };
    case "executorById/fetch/rejected":
      return {
        ...state,
        loading: false,
        executor: [],
        error: action.error
      };
      case "services/add/pending":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "services/add/fulfilled":
      return {
        ...state,
        loading: false,
        error: null,
        services: [...state.services, action.payload],
      };
    case "services/add/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
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
      dispatch({
        type: "services/fetch/rejected",
        error: `Ошибка кетча в fetchCarts: ${e.toString()}`
      });
    }
  };
};

export const fetchExecutor = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "executor/fetch/pending" });
    try {
      const response = await fetch("http://localhost:4000/executors", {
        headers: {
          "Content-type": "application/json"
        }
      });
      const json = await response.json();
      if (json.error) {
        dispatch({ type: "executor/fetch/rejected", payload: json.error });
      } else {
        dispatch({ type: "executor/fetch/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({ type: "executor/fetch/rejected", error: e.toString() });
    }
  };
};

export const fetchExecutorById = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "executorById/fetch/pending" });
    try {
      const response = await fetch(`http://localhost:4000/executor/${id}`, {
        headers: {
          "Content-type": "application/json"
        }
      });
      const json = await response.json();
      if (json.error) {
        dispatch({ type: "executorById/fetch/rejected", payload: json.error });
        console.log(json);
      } else {
        dispatch({ type: "executorById/fetch/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({ type: "executorById/fetch/rejected", error: e.toString() });
    }
  };
};

export const addService = (name, description, price, category, files) => {
  return async(dispatch) => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
      console.log(files[i]);
    }
        
        formData.append('serviceName', name);
        formData.append('categoryId', category);
        formData.append('price', price);
        formData.append('description', description);
    dispatch({ type: "services/add/fulfilled" });
    try {
      const response = await fetch("http://localhost:4000/services", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });
      const json = await response.json();
      if (json.error) {
        dispatch({ type: "services/add/rejected", error: json.error });
      } else {
        dispatch({ type: "services/add/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({ type: "services/add/rejected", error: e.toString() });
    }
  }
}
