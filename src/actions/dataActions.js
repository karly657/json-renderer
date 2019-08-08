import { API_URL } from '../constants';
import { mapProducts } from '../helpers';

export const FETCH_DATA = 'FETCH_DATA';
export const RESPONSE_DATA = 'RESPONSE_DATA';
export const SET_FILTERED_DATA = 'SET_FILTERED_DATA';

export const responseData = response => ({
  type: RESPONSE_DATA,
  payload: response
});

export const fetchData = () => async dispatch => {
  const response = await fetch(API_URL).then(resp => resp.json());
  const filters = mapProducts(response);

  dispatch(responseData(response));
};

export const setFilteredData = filtered => ({
  type: SET_FILTERED_DATA,
  payload: filtered
});
