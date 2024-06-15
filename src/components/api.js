const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-16",
  headers: {
    authorization: "a1552f18-51de-4c4e-9dd8-c1e16f497c8d",
    "Content-Type": "application/json",
  },
};
const routes = {
  cards: "/cards",
  likes: "/cards/likes",
  myUser: "/users/me",
  userAvatar: "/users/me/avatar",
};

function checkRequest(data) {
  if (data.ok) {
    return data.json();
  } else {
    return Promise.reject(`Ошибка: ${data.status}`);
  }
}

function createRequest(route, method, body) {
  return fetch(`${config.baseUrl}${route}`, {
    method: method,
    headers: config.headers,
    body: JSON.stringify(body),
  }).then(checkRequest);
}

export function getUserInfo() {
  return createRequest(routes.myUser, "GET");
}

export function updateUserInfo(name, about) {
  return createRequest(routes.myUser, "PATCH", { name, about });
}

export function updateUserAvatar(link) {
  return createRequest(routes.userAvatar, "PATCH", { avatar: link });
}

export function getCards() {
  return createRequest(routes.cards, "GET");
}

export function postNewCard({ name, link }) {
  return createRequest(routes.cards, "POST", { name, link });
}

export function deleteCardRequest(cardId) {
  return createRequest(`${routes.cards}/${cardId}`, "DELETE");
}

function likeCard(cardId) {
  return createRequest(`${routes.likes}/${cardId}`, "PUT");
}

function deleteLike(cardId) {
  return createRequest(`${routes.likes}/${cardId}`, "DELETE");
}

export function toggleLikeState(cardId, isLiked) {
  if (isLiked) {
    return deleteLike(cardId);
  } else {
    return likeCard(cardId);
  }
}
