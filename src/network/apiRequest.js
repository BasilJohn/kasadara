import {post, get} from '../network/request';
import * as ActionTypes from '../constants/actionConstants';
import apiList from './apiList';

export function apiRequest(
  serviceName,
  payload,
  successCallback,
  errorCallback,
) {
  switch (serviceName) {
    case ActionTypes.GET_VENDOR_LIST:
      get(apiList.getVendorList, payload, successCallback, errorCallback);
      break;
    case ActionTypes.SAVE_VENDOR:
      post(apiList.addVendor, payload, successCallback, errorCallback);
      break;
    default:
      break;
  }
}
