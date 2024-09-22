const baseURL = "https://vadalar.uz/api";

export default {
  loginPost(username, password) {
    return $fetch(`${baseURL}/auth/login/index`, {
      method: "POST",
      body: {
        username: username,
        password: password,
      },
    });
  },
  getUserInfo(token) {
    return $fetch(`${baseURL}/profile-manager/profile/index`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  postEnterPhone(username) {
    return $fetch(`${baseURL}/auth/register/enter-phone`, {
      method: "POST",
      body: {
        phone: username,
      },
    });
  },
  postResetEnterPhone(phone) {
    return $fetch(`${baseURL}/auth/reset/phone`, {
      method: "POST",
      body: {
        phone: phone,
      },
    });
  },
  postUpdateUserPhone(token, phone) {
    return $fetch(`${baseURL}/profile-manager/update-username/phone`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        phone: phone,
      },
    });
  },
  postResetVerifyPhone(phone, code) {
    return $fetch(`${baseURL}/auth/reset/verify`, {
      method: "POST",
      body: {
        phone: phone,
        code: code,
      },
    });
  },
  postUpdateUserPhoneCode(token, code, phone) {
    return $fetch(`${baseURL}/profile-manager/update-username/verify`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        code: code,
        phone: phone,
      },
    });
  },
  postVerifyPhone(phone, code) {
    return $fetch(`${baseURL}/auth/register/verify`, {
      method: "POST",
      body: {
        phone: phone,
        code: code,
      },
    });
  },
  postSignUp(firstname, lastname, password, password_repeat, phone, code) {
    return $fetch(`${baseURL}/auth/register/sign-up`, {
      method: "POST",
      body: {
        firstname: firstname,
        lastname: lastname,
        password: password,
        password_repeat: password_repeat,
        phone: phone,
        code: code,
      },
    });
  },
  postResetPassword(password, password_repeat, phone, code) {
    return $fetch(`${baseURL}/auth/reset/reset-password`, {
      method: "POST",
      body: {
        password: password,
        password_repeat: password_repeat,
        phone: phone,
        code: code,
      },
    });
  },
  postUpdateUserName(token, firstname, lastname) {
    return $fetch(`${baseURL}/profile-manager/profile/update-name`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        firstname: firstname,
        lastname: lastname,
      },
    });
  },
};
