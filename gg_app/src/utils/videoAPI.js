const BASE_URL = '/api/videos/';

function upload(video) {
  return fetch(BASE_URL + 'upload', {
    method: 'POST',
    body: JSON.stringify(video)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Bad upload');
  })
}

export default upload;