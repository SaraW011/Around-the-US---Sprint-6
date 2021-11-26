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
  const OverlayClickOut = document.querySelectorAll(".modal");
  OverlayClickOut.forEach((popup) =>
    popup.addEventListener("click", (evt) => {
      if (
        event.target.classList.contains("modal_open") ||
        event.target.classList.contains(`modal__image-wrapper`)
      ) {
        closeModal(evt.target.closest(".modal"));
      }
  
      document.onmouseover = function (event) {
        let target = event.target;
        if (!event.target.classList.contains("modal")) {
          target.style.cursor = "pointer";
        }
      };
    })
  );