// Selecting the popup array to close with Esc
function closePopup(popupsArray) {
  popupsArray.forEach((popup) => closeModal(popup)); // why do I need this? why prev. closeModal not working?
}

// Closing the Popup by Pressing Esc
function closePopupWithEscape(evt) {
  const key = evt.key;
  if (key == "Escape") {
    closePopup([...document.querySelectorAll(".modal")]);
    console.log("you escaped");
  }
}

//Closing the Popup by Clicking on the Overlay

function clickOutOverlay(event) {
  if (
    event.target.classList.contains("modal_open") ||
    event.target.classList.contains(`modal__image-wrapper`)
  ) {
    closeModal(event.target.closest(".modal"));
    console.log("overlay closed");
  }
}

// document.addEventListener("keydown", closePopupWithEscape); // can we attach to modal not whole document?
// document.addEventListener("click", clickOutOverlay)

function evtListeners(modal) {
  modal.classList.toggle("modal_open");

  if (modal) {
    document.addEventListener("keydown", closePopupWithEscape);
    document.addEventListener("click", clickOutOverlay);
  } else {
    document.removeEventListener("keydown", closePopupWithEscape);
    document.removeEventListener("click", clickOutOverlay)
  }
  evtListeners();
}