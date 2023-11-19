export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (password, email) => {
  return (
    fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
      .then(response => {
        // return response.json();
        return response;
      })
      // .then(res => {
      //   return res;
      // })
      .catch(err => console.log(err))
  );
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
};

export const checkTokenValidity = token => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(error => console.log('Ошибка проверки токена: ' + error));
};
