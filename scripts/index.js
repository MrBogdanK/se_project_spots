const initialCards = [
  {
  name: "Val Thorens",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
  },
  {
  name: "Restaurant terrace",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
  },
  {
  name: "An outdoor cafe",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
  },
  {
  name: "A very long bridge, over the forest and through the trees",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
  },
  {
  name: "Tunnel with morning light",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
  },
  {
  name: "Mountain house",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
  }
];

const enlargePictureModal = document.querySelector("#enlarge-picture-modal");

const closeButtonTypeImage = enlargePictureModal.querySelector(".modal__close-button_type-image");

const modalCardImage = enlargePictureModal.querySelector(".modal__card-image");

const modalCardTitle = enlargePictureModal.querySelector(".modal__card-title")

const cardTemplate = document.querySelector("#cardTemplate").content.querySelector(".card");


const editProfileButton = document.querySelector(".profile__edit-button");

const editProfileModal = document.querySelector("#edit-profile-modal");

const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button",
);

const profileAddButton = document.querySelector(".profile__add-button");
const editProfileForm = editProfileModal.querySelector(".modal__form");

const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const newPostForm = newPostModal.querySelector(".modal__form");

const newPostCardImageInput = newPostModal.querySelector("#card-image-input");
const newPostCardCaptionInput = newPostModal.querySelector("#card-caption-input");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const profileNameEl = document.querySelector(".profile__name");

const profileDescritptionEl = document.querySelector(".profile__description");

const cardList = document.querySelector (".cards__list");




function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardTrashButton = cardElement.querySelector(".card__trash-button");
  cardLikeButton.addEventListener("click", handleLikeButtonClick); 
  cardTrashButton.addEventListener("click", handleTrashButtonClick);
  cardImage.addEventListener("click", handleCardImageClick);
  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  return cardElement;




}

function handleCardImageClick(evt) {
const enlargeCardPicture = evt.target;
modalCardTitle.textContent = enlargeCardPicture.closest(".card").querySelector(".card__title").textContent;
modalCardImage.src = enlargeCardPicture.closest(".card").querySelector(".card__image").src;
  openModal(enlargePictureModal);
}

function handleTrashButtonClick(evt) {
  const card = evt.target.closest(".card");
  card.remove();
}

function handleLikeButtonClick(evt) {
evt.target.classList.toggle("card__like-button_liked");
};

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(newPostCardImageInput.value, newPostCardCaptionInput.value);
  const newCard = { name: newPostCardCaptionInput.value, link: newPostCardImageInput.value };
  const card = getCardElement(newCard);
  cardList.prepend(card);
 

  closeModal(newPostModal);
}
newPostForm.addEventListener("submit",handleNewPostSubmit);


closeButtonTypeImage.addEventListener("click",function()  { 
  closeModal(enlargePictureModal); 
});


editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescritptionEl.textContent;

  openModal(editProfileModal);
});

editProfileCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

profileAddButton.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  console.log("submitting");

  profileNameEl.textContent = editProfileNameInput.value;
  profileDescritptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}
editProfileForm.addEventListener("submit", handleEditProfileSubmit);

initialCards.forEach(function(item) {
  const card = getCardElement(item);
  cardList.prepend(card);

});
