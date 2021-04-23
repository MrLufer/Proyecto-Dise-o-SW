import API_PEDIDOS from "../config/api.pedidos";

export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let response = await fetch(`${API_PEDIDOS}/login`, requestOptions);
    let data = await response.json();

    if (data.status == 200) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      data.year = new Date().getFullYear()
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }

    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    console.log(data.errors[0]);
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
    console.log(error);
  }
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}
