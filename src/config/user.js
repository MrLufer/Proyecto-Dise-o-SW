class user {
  static getId() {
    let user = JSON.parse(sessionStorage.getItem("react-user"));
    return user.value.data._id;
  }
  static getRol() {
    let user = JSON.parse(sessionStorage.getItem("react-user"));
    return user.value.data.rol;
  }
}

export default user;
