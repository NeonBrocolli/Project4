import videoAPI from './videoAPI';

function upload(video) {
  console.log('hello! from videoAPI')
  return videoAPI.upload(video)
}

export default upload;