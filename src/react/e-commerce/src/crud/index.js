import axios from "axios";

const serverURL = "http://127.0.0.1:8888";

export const signUp = async (user) => {
  console.log("user for sign up: ", user)

    try {
      const res = await axios.post(`${serverURL}/api/auth/signup`, {
        username: "Kira112",
        email: "test1@gmial.com",
        password: "123456",
        role: ["MODERATOR", "ADMIN"],
      });

      console.log("Response from spring", res);
    } catch (er) {
      console.log("error: ", er);
    }
    console.log("finished")
}

export const signIn = ({email, password}) => {
    console.log("user for sign in: ", {email, password})
}