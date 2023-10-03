import axios from "axios";

export const loginService = async (username, password) => {
  await axios
    .post("http://127.0.0.1:3000/auth/login", { username, password })
    .then((res) => {
      console.log(res.data);
      return true;
    })
    .catch((err) => {
      console.log(err);
    });

  return false;
};
