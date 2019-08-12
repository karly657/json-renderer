// TODO separate filters to different files (dependency cycle)
import { setFilteredData } from './dataActions';
import { filter } from '@/helpers/filters';

export const SET_FILTERS_PROPS = 'SET_FILTERS_PROPS';
export const SET_FILTERS = 'SET_FILTERS';

export const setFiltersProps = props => ({
  type: SET_FILTERS_PROPS,
  payload: props
});

export const setFilters = filters => ({
  type: SET_FILTERS,
  payload: filters
});

export const filterData = filters => async (dispatch, getState) => {
  // dispatch setFilters
  // dispatch dataActions->filterProducts

  await dispatch(setFilters(filters));

  // const filteredData = filter(state.data, state.filters) ---> FILTER HERE
  // dispatch(setFilteredData(filteredData)) from actions --> dataActions
  const state = getState();

  const filteredData = filter(state.data.products, state.filters.activeFilters);

  dispatch(setFilteredData(filteredData));
};
