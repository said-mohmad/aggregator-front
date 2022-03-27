const initialState = {
    loadingPerson: true,
    loadingService: true,
    user: null,
    error: null,
    services: null
}

export const organization = (state = initialState, action) => {
    switch (action.type) {
//ORGANIZATION=LOAD============================================================
        case 'organization/fetch/pending':
            return {
                ...state,
                error: null,
                loadingPerson: true
            };
        case 'organization/fetch/rejected':
            return {
                ...state,
                user: null,
                error: action.error,
                loadingPerson: false
            };
        case 'organization/fetch/fulfilled':
            return {
                ...state,
                user: action.payload,
                error: null,
                loadingPerson: false
            };
//ORGANIZATION=EDIT============================================================
        case 'organization/edit/fetch/pending':
            return {
                ...state,
                user: null,
                error: null,
                loadingPerson: true,
            };
        case 'organization/edit/fetch/rejected':
            return {
                ...state,
                user: null,
                error: action.error,
                loadingPerson: false,
            };
        case 'organization/edit/fetch/fulfilled':
            return {
                ...state,
                user: action.payload,
                error: null,
                loadingPerson: false
            }

//SERVICE=============================================================

        case 'services/fetch/pending':
            return {
                ...state,
                services:null,
                error: null,
                loadingService: true
            };
        case 'services/fetch/rejected':
            return {
                ...state,
                error: action.error,
                loadingService: false,
                services: null
            };
        case 'services/fetch/fulfilled':
            return {
                ...state,
                services: action.payload,
                error: null,
                loadingService: false
            };
        default:
            return state;
    }
}

export const loadOrganization = () => {
    return async (dispatch) => {
        // console.log('hello')
        dispatch({ type: 'organization/fetch/pending' })
        const res = await fetch('http://localhost:4000/executor', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        const result = await res.json()
        // console.log(result)
        // console.log(localStorage.getItem('token'))

        if (result.error) {
            dispatch({ type: 'organization/fetch/rejected', error: result.error })
        } else {
            dispatch({ type: 'organization/fetch/fulfilled', payload: result })
        }

    }
}

export const editOrganization = (executor, phone, city) => {
    return async (dispatch) => {
        dispatch({type: 'organization/edit/fetch/pending'})
        const res = await fetch('http://localhost:4000/executor/patch', {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                executor,
                phone,
                city
            })
        })
        const result = await res.json()

        if(result.error) {
            dispatch({type: 'organization/edit/fetch/rejected', error: result.error})
        } else {
            dispatch({type: 'organization/edit/fetch/fulfilled', payload: result})
        }
    }
}

export const loadServices = () => {
    return async (dispatch) => {
        dispatch({ type: 'services/fetch/pending' })
        const res = await fetch('http://localhost:4000/services/executor/user', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        const result = await res.json()
        // console.log(result)

        if (result.error) {
            dispatch({ type: 'services/fetch/rejected', error: result.error })
        } else {
            dispatch({ type: 'services/fetch/fulfilled', payload: result })
        }
    }
}