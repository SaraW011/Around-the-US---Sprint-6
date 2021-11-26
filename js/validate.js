// Define  input field's behavior depending on the field's validity.
// use classic solution JS functions:
// ****** showInputError() — this function shows the error element in order to notify the user.
// ****** hideInputError() — this function hides the error element.
// ****** isValid() — this checks if the field is valid, and also calls either showInputError() or hideInputError().

// Select all the needed form elements and assign them to variables
const fieldset = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

// #1: Find the error message element

function showInputError(formElement, inputElement, settings) {
  // Select each error message element using its unique id name + -error
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(settings.inputErrorClass);
  // Replace the content of the error message with HTMLObjectElement.validationMessage
  errorElement.textContent = inputElement.validationMessage;
  // Show the error message
  errorElement.classList.add(settings.errorClass);
}

// #2: hide the error element

function hideInputError(formElement, inputElement, settings) {
  // Find each error message element using its unique class name
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(settings.inputErrorClass);
  // Hide the error message
  errorElement.classList.remove(settings.errorClass);
  // Reset the error
  errorElement.textContent = "";
}

//#3: check if field is valid

function checkInputValidity(formElement, inputElement, settings) {
  //if else statement whether form is valid or not 26:43
  if (!inputElement.validity.valid) {
    // If NOT (!), show the error element. The error message itself is the function's parameter
    // The parameter of showInputError() is now a form, which contains a field to be checked
    showInputError(formElement, inputElement, settings);
  } else {
    // If it's valid, hide the error element
    hideInputError(formElement, inputElement, settings);
  }
}

// toggle button state after checking validity

function toggleButtonState(inputList, buttonElement, settings) {
  const hasInvalidInput = inputList.some(
    (inputElement) => !inputElement.validity.valid
  );

  if (hasInvalidInput) {
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
}

//-->>> setEventListeners: 
//-->>> find all of the inputs within the form
//-->>> + find all of the buttons within the form
//-->>> + check validity
//-->>> then toggle button state

function setEventListeners(formElement, settings) {
  // Find all fields inside the form, and make an array from them using the Array.from() method
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  // call to check the button state in the very beginning
  toggleButtonState(inputList, buttonElement, settings);

  // iterate over the resulting array
  inputList.forEach((inputElement) => {
    // add the input event handler to each field
    inputElement.addEventListener("input", function () {
      //"input" event handler on a form makes its validation instant
      checkInputValidity(formElement, inputElement, settings);

      // call to check check it whenever any field input is changed
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
}

//after setting event listeners, enable validation for all forms:

function enableValidation(settings) {
  // find all forms with the specified class in DOM, and make an array from them using the Array.from() method
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  // iterate over the resulting array
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formElement, settings);
  });
}

function checkSubmitButtonValidity(formElement, settings) {
  const inputElements = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );
  toggleButtonState(inputElements, buttonElement, settings);
}

enableValidation(fieldset); //finally use the object as an argument for enableValidation function