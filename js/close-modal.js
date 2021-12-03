// Selecting the popup array to close with Esc
// function closePopup(popupsArray) {
//   popupsArray.forEach((popup) => closeModal(popup));   // previous function replaced by closeModal, line 10
// }

// Closing the Popup by Pressing Esc
function closePopupWithEscape(event) {
  const key = event.key;
  if (key == "Escape") {
    closeModal(document.querySelector(".modal_open"));
    // closePopup([...document.querySelectorAll(".modal")]);
    console.log("you escaped");
  }
}

//Closing the Popup by Clicking on the Overlay
function modalOverlayClickOut(event) {
  if (
    event.target.classList.contains("modal_open") ||
    event.target.classList.contains(`modal__image-wrapper`)
  ) {
    closeModal(event.target);
    console.log("overlay closed");
  }
}

//-->> open + close modals + remove event listeners:
const profilePopup = document.querySelector(".modal");

function openModal(popup) {
  popup.classList.add("modal_open");
  document.addEventListener("keydown", closePopupWithEscape);
  document.addEventListener("click", modalOverlayClickOut);
}

function closeModal(popup) {
  popup.classList.remove("modal_open");
  document.removeEventListener("keydown", closePopupWithEscape);
  document.removeEventListener("click", modalOverlayClickOut);
}