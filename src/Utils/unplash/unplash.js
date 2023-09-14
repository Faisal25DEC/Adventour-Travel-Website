const unsplashApiKey = `GyO4Y3ccun7RvAO8u4mPM8e-KNFfw3jC38X9Q-UnHsI`;
const unsplashApiUrl = `https://api.unsplash.com/search/photos/?client_id=${unsplashApiKey}`;

export const getPlaceImages = (name) =>
  async function () {
    try {
      let apiResponse = await fetch(
        `${unsplashApiUrl}&page=1&query=${name}&color=blue&orientation=squarish`
      );
      let placeImages = await apiResponse.json();
      console.log(placeImages);
      return placeImages.results[0].urls.thumb;
    } catch (err) {
      console.log(err);
    }
  };
