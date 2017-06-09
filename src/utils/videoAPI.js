import tokenService from './tokenService';

const BASE_URL = '/api/videos/';

export function createVideo(video) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }),
    body: JSON.stringify(video)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Bad upload');
  })
  .then(video => video);
}
