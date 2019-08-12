import { setFilteredData } from './dataActions';
import { filter, sort } from '@/helpers/filters';

export const SET_FILTERS_PROPS = 'SET_FILTERS_PROPS';
export const SET_FILTERS = 'SET_FILTERS';
export const SET_IS_SORTED = 'SET_IS_SORTED';

export const setFiltersProps = props => ({
  type: SET_FILTERS_PROPS,
  payload: props
});

export const setFilters = filters => ({
  type: SET_FILTERS,
  payload: filters
});

export const filterData = filters => async (dispatch, getState) => {
  await dispatch(setFilters(filters));

  const state = getState();

  const filteredData = filter(state.data.products, state.filters.activeFilters);

  dispatch(setFilteredData(filteredData));
};

export const sortData = type => (dispatch, getState) => {
  const state = getState();

  const sortedData = sort(state.data.filteredProducts, type);

  dispatch(setFilteredData(sortedData));
}