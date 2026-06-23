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

const newPostCardImageEl = newPostModal.querySelector(".card__image");
const newPostCardCaptionEl = newPostModal.querySelector(".card__title");

const newPostCardImageInput = newPostModal.querySelector("#card-image-input");
const newPostCardCaptionInput = newPostModal.querySelector(
  "#card-caption-input",
);

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log("submitting");
  newPostCardImageEl.textContent = newPostCardImageInput.value;
  newPostCardCaptionEl.textContent = newPostCardCaptionInput.value;

  closeModal(newPostModal);
}
newPostForm.addEventListener("submit", handleNewPostSubmit);

const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

const profileNameEl = document.querySelector(".profile__name");

const profileDescritptionEl = document.querySelector(".profile__description");

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
