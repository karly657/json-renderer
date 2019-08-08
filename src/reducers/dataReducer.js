import { FETCH_DATA, RESPONSE_DATA, SET_FILTERED_DATA } from '../actions/dataActions';

const initialState = {
  products: [],
  filteredProducts: [],
  error: null,
  isLoaded: false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoaded: false
      };
    case RESPONSE_DATA:
      return {
        ...state,
        isLoaded: true,
        products: action.payload,
        filteredProducts: action.payload
      };
    case SET_FILTERED_DATA:
      return {
        ...state,
        filteredProducts: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;