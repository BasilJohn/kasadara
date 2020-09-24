import * as ActionTypes from '../constants/actionConstants';
import {apiRequest} from '../network/apiRequest';

const getVendorList = data => (dispatch, getState) => {
  apiRequest(
    ActionTypes.GET_VENDOR_LIST,
    null,
    response => {
      dispatch({
        type: ActionTypes.GET_VENDOR_LIST_SUCCESS,
        payload: response.data.results,
      });
    },
    error => {
      dispatch({type: ActionTypes.GET_VENDOR_LIST_ERROR});
    },
  );
};

const saveVendor = data => (dispatch, getState) => {
  apiRequest(
    ActionTypes.SAVE_VENDOR,
    data,
    response => {
      dispatch({
        type: ActionTypes.SAVE_VENDOR_SUCCESS,
        payload: true,
      });
    },
    error => {
      dispatch({type: ActionTypes.SAVE_VENDOR_ERROR, payload: false});
    },
  );
};
const resetInitialState = data => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.RESET_INITIAL_STATE,
    payload: true,
  });
};
export {getVendorList, saveVendor, resetInitialState};
