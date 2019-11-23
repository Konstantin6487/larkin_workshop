const makeImage = (url, height = 400, width = 1000) => {
  const image = document.createElement('img');
  image.src = url;
  image.height = height;
  image.width = width;
  return image;
};

export default makeImage;
