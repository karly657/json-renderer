import { SET_FILTERS_PROPS, SET_FILTERS } from '@/actions/filterActions';

const initState = {
  list: [],
  activeFilters: {}
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_FILTERS_PROPS:
      return {
        ...state,
        list: action.payload
      };
    case SET_FILTERS:
      return {
        ...state,
        activeFilters: {
          ...state.activeFilters,
          [action.payload.type]: action.payload.value
        }
      };
    default:
      return state;
  }
};

export default filterReducer;