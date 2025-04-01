// class Api {
//     constructor({ baseUrl, headers }) {
//       this._baseUrl = baseUrl;
//       this._headers = headers;
//     }
  
//     // Obtener información del usuario
//     getUserInfo() {
//       return fetch(`${this._baseUrl}/users/me`, {
//         method: "GET",
//         headers: this._headers,
//       })
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(`Error: ${res.status}`);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
  
//     // Obtener las tarjetas iniciales
//     getInitialCards() {
//       return fetch(`${this._baseUrl}/cards`, {
//         method: "GET",
//         headers: this._headers,
//       })
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(`Error: ${res.status}`);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
  
//     // Actualizar perfil del usuario
//     editProfile(data) {
//       return fetch(`${this._baseUrl}/users/me`, {
//         method: "PATCH",
//         headers: this._headers,
//         body: JSON.stringify({
//           name: data.name,
//           about: data.about,
//         }),
//       })
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(`Error: ${res.status}`);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
  
//     // Añadir una nueva tarjeta
//     addCard(data) {
//       return fetch(`${this._baseUrl}/cards`, {
//         method: "POST",
//         headers: this._headers,
//         body: JSON.stringify({
//           name: data.name,
//           link: data.link,
//         }),
//       })
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(`Error: ${res.status}`);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
  
//     // Dar "me gusta" a una tarjeta
//     addLike(cardId) {
//       return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
//         method: "PUT",
//         headers: this._headers,
//       })
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(`Error: ${res.status}`);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
  
//     // Quitar "me gusta" de una tarjeta
//     removeLike(cardId) {
//       return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
//         method: "DELETE",
//         headers: this._headers,
//       })
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(`Error: ${res.status}`);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
  
//     // Eliminar una tarjeta
//     deleteCard(cardId) {
//       return fetch(`${this._baseUrl}/cards/${cardId}`, {
//         method: "DELETE",
//         headers: this._headers,
//       })
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(`Error: ${res.status}`);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
  
//     // Método para actualizar el avatar del usuario
//     editAvatarProfile(data) {
//       return fetch(`${this._baseUrl}/users/me/avatar`, {
//         method: "PATCH",
//         headers: this._headers,
//         body: JSON.stringify({
//           avatar: data.avatar,
//         }),
//       })
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(`Error: ${res.status}`);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
// }

// const api = new Api({
//     baseUrl: "https://around.nomoreparties.co/v1/web-es-cohort-17",
//     headers: {
//       authorization: "aca41053-935f-4980-ab7e-41af6eea4631",
//       "Content-Type": "application/json",
//     },
// });

// export default api;


class Api {
  constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
  }

  // Método genérico para hacer peticiones
  _makeRequest(endpoint, method = "GET", body = null) {
    const options = {
      method,
      headers: this._headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    return fetch(`${this._baseUrl}${endpoint}`, options)
      .then((res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)))
      .catch((err) => {
        console.error("Error en la API:", err);
        throw err;
    });
  }

  // Métodos utilizando _makeRequest
  getUserInfo() {
    return this._makeRequest("/users/me");
  }

  getInitialCards() {
    return this._makeRequest("/cards");
  }

  editProfile(data) {
    return this._makeRequest("/users/me", "PATCH", { name: data.name, about: data.about });
  }

  addCard(data) {
    return this._makeRequest("/cards", "POST", { name: data.name, link: data.link });
  }

  addLike(cardId) {
    return this._makeRequest(`/cards/likes/${cardId}`, "PUT");
  }

  removeLike(cardId) {
    return this._makeRequest(`/cards/likes/${cardId}`, "DELETE");
  }

  deleteCard(cardId) {
    return this._makeRequest(`/cards/${cardId}`, "DELETE");
  }

  editAvatarProfile(data) {
    return this._makeRequest("/users/me/avatar", "PATCH", { avatar: data.avatar });
  }
}

// Instancia de la API
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web-es-cohort-17",
  headers: {
    authorization: "aca41053-935f-4980-ab7e-41af6eea4631",
    "Content-Type": "application/json",
  },
});

export default api;
