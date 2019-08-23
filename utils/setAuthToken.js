import axios from "axios";

const setAuthToken = token => {
  console.log('home')
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
    console.log('Saved')
  } else {
    delete axios.defaults.headers.common["Authorization"];
    console.log('Not Saved')

  }
};

export default setAuthToken;
