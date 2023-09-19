const unsplashApiKey = `GyO4Y3ccun7RvAO8u4mPM8e-KNFfw3jC38X9Q-UnHsI`;
const unsplashApiUrl = `https://api.unsplash.com/search/photos/?client_id=${unsplashApiKey}`;

export const getPlaceImages = async (name) => {
  console.log(name);
  try {
    let apiResponse = await fetch(`${unsplashApiUrl}&page=1&query=${name}`);
    let placeImages = await apiResponse.json();
    console.log(placeImages);
    return placeImages.results;
  } catch (err) {
    console.log(err);
  }
};
