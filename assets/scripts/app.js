const photoUrl = document.getElementById("photo");
const photoTitle = document.getElementById("photo-title");
const photoDescription = document.getElementById("photo-description");
const nextButtom = document.getElementById("right-arrow");
const previousButtom = document.getElementById("left-arrow");
const listRoot = document.getElementById("thumbnails");
const changeItButtom = document.getElementById("change-buttom");
const userInputTitle = document.querySelectorAll(".input-element");

const photoAlbum = [
  {
    id: 0,
    url: "pix/odovSNs.jpg",
    title: "My first title",
    description: "What happened here, why is this a very nice image",
  },
  {
    id: 1,
    url: "pix/P9D1DZs.jpg",
    title: "My 2nd title",
    description: "What happened here, why is this a very nice image",
  },
  {
    id: 2,
    url: "pix/4EGa2b6.jpg",
    title: "My last before title",
    description: "What happened here, why is this a very nice image",
  },
  {
    id: 3,
    url: "pix/20130427_203052.jpg",
    title: "My last title",
    description: "What happened here, why is this a very nice image",
  },
  {
    id: 4,
    url: "pix/80045705_10206664992499307_7843078184823160832_o.jpg",
    title: "My very last title",
    description: "What happened here, why is this a very nice image",
  },
  {
    id: 5,
    url: "pix/star_relief_planet_space_94536_2560x1080.jpg",
    title: "Title",
    description: "What happened here, why is this a very nice image",
  },
  {
    id: 6,
    url: "pix/petrapakophotography_szabotesok-7944.jpg",
    title: "Family",
    description: "Összegyült a kis család",
  },
];
let currentPhotoID = 0;

const refresh = () => {
  photoUrl.src = photoAlbum[currentPhotoID].url;
  photoTitle.innerHTML = photoAlbum[currentPhotoID].title;
  photoDescription.innerHTML = photoAlbum[currentPhotoID].description;
  inputTextHandler();
};

const changeMainPix = (id) => {
  const newMainPix = listRoot.children[id].firstChild;
  currentPhotoID = id;
  const oldPix = document.getElementById("mainpix");
  oldPix.id = "";
  newMainPix.id = "mainpix";
  refresh();
};

const renderThumbnails = (photosUrl, photosTitle, Id) => {
  const newDiv = document.createElement("div");
  newDiv.classList = "thumbnail";

  const newPix = document.createElement("img");
  newPix.classList = "thumbnail";
  if (Id === currentPhotoID) newPix.id = "mainpix";
  newPix.src = photosUrl;

  const newTitle = document.createElement("div");
  newTitle.classList = "title";
  newTitle.innerHTML = photosTitle;
  listRoot.append(newDiv);
  listRoot.lastChild.append(newPix);
  newPix.addEventListener("click", () => changeMainPix(Id, newPix));
  listRoot.lastChild.append(newTitle);
};

const nextPix = () => {
  if (currentPhotoID !== photoAlbum.length - 1) {
    currentPhotoID++;
  } else {
    currentPhotoID = 0;
  }
  changeMainPix(currentPhotoID);
};

const previousPix = () => {
  if (currentPhotoID > 0) {
    currentPhotoID--;
  } else {
    currentPhotoID = photoAlbum.length - 1;
  }
  changeMainPix(currentPhotoID);
};

const changeIt = () => {
  photoAlbum[currentPhotoID].title = userInputTitle[0].value;
  photoAlbum[currentPhotoID].description = userInputTitle[1].value;
  refresh();
};

const inputTextHandler = () => {
  userInputTitle[0].value = photoAlbum[currentPhotoID].title;
  userInputTitle[1].value = photoAlbum[currentPhotoID].description;
};

photoAlbum.forEach((element) => {
  renderThumbnails(element.url, element.title, element.id);
});

refresh();

nextButtom.addEventListener("click", nextPix);
previousButtom.addEventListener("click", previousPix);
document.addEventListener("keydown", function (event) {
  switch (event.which) {
    case 38:
      nextPix();
      break;
    case 39:
      nextPix();
      break;
    case 40:
      previousPix();
      break;
    case 37:
      previousPix();
      break;
    case 13:
      changeIt();
      break;
  }
});
changeItButtom.addEventListener("click", changeIt);
