import axios from 'axios';
import Cookies from 'js-cookie';

const APIUrl = 'http://localhost:8000/';

axios.defaults.withCredentials = true;

const APIRequest = (endPoint, params) => {
  // Check if there are any parameters so far. Create them if there isn't.
  if(params.headers == undefined)
    params["headers"] = new Object();

  // Always add CSRF Header
  params['url'] = APIUrl + endPoint;
  params['headers']['X-CSRFToken'] = Cookies.get('csrftoken');

  return axios(params);
}

export default APIRequest;
