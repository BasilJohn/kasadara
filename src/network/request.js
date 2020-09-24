import axios from 'axios';
import {baseUrl,applicationId,apiKey} from './networkConstants';

axios.defaults.headers.common['X-Parse-Application-Id'] = applicationId;
axios.defaults.headers.common['X-Parse-REST-API-Key'] = apiKey;


export function post(endUrl, payload, successCallback, erorCallback) {
  return axios
    .post(`${baseUrl + endUrl}`, payload, {
      headers: {
        ...axios.defaults.headers.common,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      debugger;
      successCallback(response);
    })
    .catch(error => {
      debugger;
      erorCallback(error);
    });
}

export function get(endUrl, payload, successCallback, erorCallback) {
  return axios
    .get(`${baseUrl + endUrl}`, {
      headers: {
        ...axios.defaults.headers.common,
        Accept: 'application/json',
        'Content-Type': 'application/json:charset=utf-8',
      },
    })
    .then(response => {
      successCallback(response);
    })
    .catch(error => {
      erorCallback(error);
    });
}
