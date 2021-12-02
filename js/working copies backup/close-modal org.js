// Closing the Popup by Pressing Esc
function escapePopup(popupsArray) {
    popupsArray.forEach((popup) => closeModal(popup));
  }
  
  document.addEventListener("keydown", function (evt) {
    const key = evt.key;
    if (key == "Escape") {
      // escapePopup([editProfilePopup, addNewPlacePopup, previewImage]) //--->>> won't work for future popups
      escapePopup([...document.querySelectorAll(".modal")]); // will work for any added modal class
    }
  });
  
  //Closing the Popup by Clicking on the Overlay
  const modalsOverlayClickOut = document.querySelectorAll(".modal");
  modalsOverlayClickOut.forEach((popup) =>
    popup.addEventListener("click", (evt) => {
      if (
        event.target.classList.contains("modal_open") ||
        event.target.classList.contains(`modal__image-wrapper`)
      ) {
        closeModal(evt.target.closest(".modal"));
      }
    })
  );