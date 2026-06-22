const editProfileButton =
document.querySelector (".profile__edit-button");

const editProfileModal = 
document.querySelector ("#edit-profile-modal");

const editProfileCloseButton = editProfileModal.querySelector(".modal__close-button");

const profileAddButton = document.querySelector (".profile__add-button");
const editProfileForm = editProfileModal.querySelector(".modal__form")

const newPostModal = document.querySelector ("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const newPostForm = newPostModal.querySelector(".modal__form");

const newPostCardImageEl = newPostModal.querySelector(".card__image")
const newPostCardCaptionEl = newPostModal.querySelector(".card__title")

const newPostCardImageInput = newPostModal.querySelector("#profile-image-input");
const newPostCardCaptionInput = newPostModal.querySelector("#card-image-input");



function handleNewPostSubmit(evt) {
    evt.preventDefault();
    console.log("submitting");
    newPostCardImageEl.textContent = newPostCardImageInput.value;
    newPostCardCaptionEl.textContent = newPostCardCaptionInput.value;

    newPostModal.classList.remove("modal_is-opened");
}
newPostForm.addEventListener("submit", handleNewPostSubmit);

const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");


const profileNameEl = document.querySelector(".profile__name");

const profileDescritptionEl = document.querySelector(".profile__description");

editProfileButton.addEventListener("click", function()
{ 
 editProfileNameInput.value = profileNameEl.textContent;
 editProfileDescriptionInput.value = profileDescritptionEl.textContent;

editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseButton.addEventListener("click", function()
{
editProfileModal.classList.remove("modal_is-opened");
} 
);
 


profileAddButton.addEventListener("click", function ()
{
    newPostModal.classList.add("modal_is-opened");
}
);

newPostCloseButton.addEventListener("click", function()
{
    newPostModal.classList.remove("modal_is-opened");
}
);

function handleEditProfileSubmit(evt){
    evt.preventDefault();
    console.log("submitting");
   
    profileNameEl.textContent = editProfileNameInput.value;
   profileDescritptionEl.textContent = editProfileDescriptionInput.value;
   editProfileModal.classList.remove("modal_is-opened");
}
  editProfileForm.addEventListener("submit", handleEditProfileSubmit);
