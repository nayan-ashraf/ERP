import axios from "axios";

axios.interceptors.response.use(null, error => {
        const expectedError = error.response &&
        error.response.status >= 400 &&
        error.response.status <500
      
        if(!expectedError) {
          alert('An Unexpected Error occured . Please try again later');
        }
        else if(error.response.status === 400) {
          alert('Bad request');
        }
        else if(error.response.status === 404) {
          alert('This post is not found or previously deleted');
            }
            return Promise.reject(error);
      })

const http = {
        get: axios.get,
        post: axios.post,
        put: axios.put,
        delete: axios.delete
}

export default http;