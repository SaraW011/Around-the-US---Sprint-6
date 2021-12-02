// Closing the Popup by Pressing Esc
function escapePopup(popupsArray) {
    popupsArray.forEach((popup) => closeModal(popup));
  }
  
  function closePopupWithEscape(evt) {
    const key = evt.key;
    if (key == "Escape") {
      escapePopup([...document.querySelectorAll(".modal")]);
      console.log('you escaped')    
    }
  };
  
  //Closing the Popup by Clicking on the Overlay
 
  function clickOutOverlay(event) {
      if (
        event.target.classList.contains("modal_open") ||
        event.target.classList.contains(`modal__image-wrapper`)
      ) {
        closeModal(event.target.closest(".modal"));
        console.log('overlay closed') 
      }
    }
    

// ----- functioning: 

// document.addEventListener("keydown", closePopupWithEscape); // can we just attach to window not whole document 

// const modalsOverlayClickOut = document.querySelectorAll(".modal");
// modalsOverlayClickOut.forEach((popup) =>  
// popup.addEventListener("click", clickOutOverlay))


//---------------------


// function toggleModal(popup) {
popup.classList.toggle("modal_open");
const modalsOverlayClickOut = document.querySelectorAll(".modal");

// function evtListeners(popup) {
// forEach(popup) 

//   if (popup) {
//     popup.addEventListener("click", modalsOverlayClickOut); 
//     popup.addEventListener("keydown", closePopupWithEscape);
//   } else {
//     popup.removeEventListener("click", modalsOverlayClickOut);
//     popup.removeEventListener("keydown", closePopupWithEscape);
//   }
//   toggleModal()
// } 
// }


const listeners = function(popup) {
  if (popup) {
    popup.addEventListener("click", modalsOverlayClickOut); 
    popup.addEventListener("keydown", closePopupWithEscape);
  } else {
    popup.removeEventListener("click", modalsOverlayClickOut);
    popup.removeEventListener("keydown", closePopupWithEscape);
  }
  listeners(popup)
}
