import axios from 'axios';
import Cookies from 'js-cookie';

class APIRequest {
  constructor(params) {
    if(params.headers == undefined)
      params["headers"] = new Object();

    params["headers"]["X-CSRFToken"] = Cookies.get('csrftoken');

    return axios(params);
  }
}

export default APIRequest;
