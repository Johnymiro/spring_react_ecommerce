import axios from "axios";

const serverURL = "http://127.0.0.1:8888";

export const signUp = async (user) => {
  console.log("user for sign up: ", user)

    try {
      const res = await axios.post(`${serverURL}/api/auth/signup`, user);

      console.log("Response from spring", res);
    } catch (er) {
      console.log("error: ", er);
    }
    console.log("finished")
}

export const signIn = async ({username, password}) => {
 console.log("user for sign in: ", {username, password})

    try {
      const res = await axios.post(`${serverURL}/api/auth/signin`, {username, password});

      console.log("Response from spring", res);
      return res
    } catch (er) {
      console.log("error: ", er);
    }
    console.log("finished")
}

export const getAllItems = async () => {
    axios.defaults.headers.get['Content-Type'] ='application/json';
    axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJKb2hueU1pcm8iLCJpYXQiOjE2MjgwMDI1NjUsImV4cCI6MTYyODAwNjE2NX0.BpcnSQNxlVypjAEs453v7k0Pya1__XjhNVz05NnfHOI3x6lNJcCh4hDlWLT7-xVoRYioGDB_o5yo8zMss7_qng";

    try {


      const res = await axios.get(`${serverURL}/items/all`);
      console.log("Response from spring", res); 
      
    } catch (er) {
      console.log("error: ", er);
    }
    console.log("finished")

}