import Splide from "@splidejs/splide";

export const splideControl = (ref) => {
  var splide = new Splide(ref, {
    pagination: false,
  });

  splide.mount();
};

export const thumbnailControl = () => {
  var splide = new Splide("#main-carousel");

  // Collects LI elements:
  var thumbnails = document.getElementsByClassName("thumbnail");

  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
  }
  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener("click", function () {
      splide.go( index );
    });
  }
};
