//Closing the Popup by Pressing Esc
function escapePopup(popupsArray) {
  popupsArray.forEach((popup) => closeModal(popup));
}

document.addEventListener("keydown", function (evt) {   //DRY
  const key = evt.key;
  if (key == "Escape") {
    escapePopup([...document.querySelectorAll(".modal")]);
  }
});

//Closing the Popup by Clicking on the Overlay
const modalsOverlayClickOut = document.querySelectorAll(".modal");
modalsOverlayClickOut.forEach((popup) =>
  popup.addEventListener("click", (evt) => {    //DRY
    if (
      event.target.classList.contains("modal_open") ||
      event.target.classList.contains(`modal__image-wrapper`)
    ) {
      closeModal(evt.target.closest(".modal"));
    }
  })
);
//----------------------
//  EVENT LISTENERS   --->>> TRYING TO FIX THIS    

function toggleModal(popup) {
  popup.classList.toggle("popup_open");

  if (popup) {
    popup.removeEventListener("click", modalsOverlayClickOut);
    popup.removeEventListener("keydown", modalsOverlayClickOut);
  } else {
    popup.addEventListener("click", modalsOverlayClickOut);
    popup.addEventListener("keydown", modalsOverlayClickOut);
  }
}