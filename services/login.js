const baseURL = "https://vadalar.uz/api";

export default {
  postLogin(username, password) {
    return $fetch(`${baseURL}/auth/login/index`, {
      method: "POST",
      body: {
        username: username,
        password: password,
      },
    });
  },
};
