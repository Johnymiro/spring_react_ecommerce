import axios from "axios";

const serverURL = "http://127.0.0.1:8888";

//***********************************************************************/
//***************************     AUTH CRUD     *************************/
//***********************************************************************/

export const auth = () => {
  const createUser = async (user) => {
    try {
      const res = await axios.post(`${serverURL}/api/auth/signup`, user);

      console.log("Response from spring", res);
    } catch (er) {
      console.log("error: ", er);
    }
  };

  const signInWithUsernameAndPassword = async ({ username, password }) => {
    console.log("user for sign in: ", { username, password });

    try {
      const res = await axios.post(`${serverURL}/api/auth/signin`, {
        username,
        password,
      });

      console.log("Response from spring", res);
      return res;
    } catch (er) {
      console.log("error: ", er);
    }
  };

  return {
    createUser,
    signOut: () => {},
    signInWithUsernameAndPassword,
  };
};

//***********************************************************************/
//***************************     ITEMS CRUD     ************************/
//***********************************************************************/

export const items = ({ jwt }) => {
  axios.defaults.headers.get["Content-Type"] = "application/json";
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

  const getAllItems = async () => {
    try {
      const res = await axios.get(`${serverURL}/items/all`);
      console.log("Response from spring", res);
    } catch (er) {
      console.log("error: ", er);
    }
    console.log("finished");
  };

  const getItemById = async ({ id }) => {};

  const getItemsByIds = async ({ ids }) => {};

  const deleteItem = async ({ id }) => {};

  const updateItem = async ({ id, item }) => {};

  const createItem = async (item) => {};

  return {
    getAllItems,
    getItemById,
    getItemsByIds,
    createItem,
    updateItem,
    deleteItem,
  };
};

//* In case there will be a need to use best of class and closure parts
/*
export const Foo = (function () {
  //create a prototype.
  const prot = {
    bar(bas) {
      bas = bas || this.fallbackBas;
      console.log("bar say" + bas);
    },
  }; //end of prot.

  //constructor.
  return function (fallback) {
    const o = Object.create(prot);
    //new object, prot as prototype.
    o.fallbackBas = fallback;
    return o;
  }; //constructor
})(); //iif

const f = new Foo("This is a fallback.");
f.bar("This is not a fallback.");
f.bar();
*/

/* export const signUp = async (user) => {
  console.log("user for sign up: ", user);

  try {
    const res = await axios.post(`${serverURL}/api/auth/signup`, user);

    console.log("Response from spring", res);
  } catch (er) {
    console.log("error: ", er);
  }
  console.log("finished");
};

export const signIn = async ({ username, password }) => {
  console.log("user for sign in: ", { username, password });

  try {
    const res = await axios.post(`${serverURL}/api/auth/signin`, {
      username,
      password,
    });

    console.log("Response from spring", res);
    return res;
  } catch (er) {
    console.log("error: ", er);
  }
  console.log("finished");
}; */
