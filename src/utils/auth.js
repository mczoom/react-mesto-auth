export const BASE_URL = 'https://auth.nomoreparties.co';


export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    })
    .then((res) => {
      try {
        if (res.status === 201){
          return res.json();
        }
      } catch(e){
        return (e)
      }
    })
    .catch((err) => console.log(err));
  }; 



  export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    })
    .then((res) => {
      try {
        if (res.status === 200){
          return res.json();
        }
      } catch(e){
        return (e)
      }
    })
    .catch((err) => console.log(err));
  };



  export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      }
    })
    .then(res => res.json())    
    .catch((err) => console.log(err));
  }; 