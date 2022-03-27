const initialState = {
    loading: true,
    orders: [],
    error: null,
};

export const orders = (state = initialState, action) => {
    switch (action.type) {
        case "orders/fetch/pending":
            return {
                ...state,
                loading: true,
                orders: []
            };
        case "orders/fetch/fulfilled":
            return {
                ...state,
                loading: false,
                orders: action.payload
            };
        case "orders/fetch/rejected":
            return {
                ...state,
                loading: false,
                orders: [],
                error: action.error
            };
        default:
            return state;
    }
}

export const fetchOrders = (executorId) => {
    return async (dispatch) => {
        dispatch({ type: "orders/fetch/pending" });
        try {
            const response = await fetch(`http://localhost:4000/order/executor/${executorId}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                }
            });
            const json = await response.json();
            if (json.error) {
                dispatch({ type: "orders/fetch/rejected", payload: json.error });
            } else {
                dispatch({ type: "orders/fetch/fulfilled", payload: json });
            }
        } catch (e) {
            dispatch({
                type: "services/fetch/rejected",
                error: `Ошибка кетча: ${e.toString()}`
            });
        }
    };
};