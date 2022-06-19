export const BASE_URL = 'https://auth.nomoreparties.co';


export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    })
    .then((response) => {
      try {
        if (response.status === 201){
          return response.json();
        }
      } catch(e){
        return (e)
      }
    })
    .then((res) => {
        return res;
        //localStorage.setItem('token', res.data._id);
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
    .then((response) => {
      try {
        if (response.status === 200){
          return response.json();
        }
      } catch(e){
        return (e)
      }
    })
    .then((res) => {
        console.log(res);      
        localStorage.setItem('token', res.token);
    })
    .catch((err) => console.log(err));
  }; 