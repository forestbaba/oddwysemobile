import axios from "axios";
axios.defaults.timeout = 5000;

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
    console.log('Saved')
  } else {
    delete axios.defaults.headers.common["Authorization"];
    console.log('Not Saved')

  }
};

export default setAuthToken;
