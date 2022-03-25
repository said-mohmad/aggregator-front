const initialState = {
    loading: false,
    loadingRmv: false,
    error: null,
    message: null
}

export const editRemove = (state = initialState, action) => {
    switch (action.type) {
        case 'services/edit/fetch/pending':
            return {
                ...state,
                loading: true,
                error: null,
                newItem: null
            };
        case 'services/edit/fetch/rejected':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'services/edit/fetch/fulfilled':
            return {
                ...state,
                loading: false,
                error: null,
                newItem: action.payload
            };
        case 'services/remove/fetch/pending':
            return {
                ...state,
                loadingRmv: true,
                error: null,
                message: null
            };
        case 'services/remove/fetch/rejected':
            return {
                ...state,
                loadingRmv: false,
                error: action.error,
                message: null
            };
        case 'services/remove/fetch/fulfilled':
            return {
                ...state,
                loadingRmv: false,
                error: null,
                message: action.message
            }
        default:
            return state
    }
}

export const editService = (serviceId, name, description, price) => {
    return async (dispatch) => {
        dispatch({ type: 'services/edit/fetch/pending' })
        // console.log(serviceId)
        const res = await fetch(`http://localhost:4000/services/executor/edit/${serviceId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                serviceName: name,
                description,
                price
            })
        })
        const result = await res.json()

        if (result.error) {
            dispatch({ type: 'services/edit/fetch/rejected', error: result.error })
        } else {
            dispatch({ type: 'services/edit/fetch/fulfilled', message: result.message })
        }
    }
}

export const removeService = (serviceId) => {
    return async (dispatch) => {
        dispatch({ type: 'services/remove/fetch/pending' })
        const res = await fetch(`http://localhost:4000/services/executor/remove/${serviceId}`, {
            method: "DELETE",
        })
        const result = await res.json()

        if (result.error) {
            dispatch({ type: 'services/remove/fetch/rejected', error: result.error })
        } else {
            dispatch({ type: 'services/remove/fetch/fulfilled', payload: result })
        }

    }
}