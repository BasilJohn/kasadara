import {combineReducers} from 'redux';
import * as ActionTypes from '../constants/actionConstants';

const INITIAL_STATE = {
  vendorList: [],
  isLoading: false,
  isDataSaved: null,
};

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_VENDOR_LIST_SUCCESS:
      return {
        ...state,
        vendorList: action.payload,
      };
    case ActionTypes.GET_VENDOR_LIST_ERROR:
      return {
        ...state,
        vendorList: [],
      };
    case ActionTypes.SAVE_VENDOR_SUCCESS:
      return {
        ...state,
        isDataSaved: action.payload,
      };
    case ActionTypes.SAVE_VENDOR_ERROR:
      return {
        ...state,
        isDataSaved: action.payload,
      };
      case ActionTypes.RESET_INITIAL_STATE:
      return {
        ...state,
        isDataSaved:null,
      };  
    default:
      return state;
  }
};

export default combineReducers({
  main: mainReducer,
});
