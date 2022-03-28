const initialState = {
    oneServise: [],
    loading: false,
    error: false,
  };
  
  export const oneServise = (state = initialState, action) => {
    switch (action.type) {
      // Обработка события на выведение одной новости
  
      case "oneServise/fetch-oneServise/pending":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "oneServise/fetch-oneServise/fulfilled":
        return {
          ...state,
          oneServise: action.payload,
          loading: false,
          error: null,
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
        dispatch({type: 'oneServise/fetch-oneServise/pending'})
        const res = await fetch(`http://localhost:4000/services/${id}`)
        const result = await res.json()
        if(result.error) {
            dispatch({type: 'oneServise/fetch-oneServise/rejected', error: result.error})
        } else {
            dispatch({type: 'oneServise/fetch-oneServise/fulfilled', payload: result})
        }
    }
}