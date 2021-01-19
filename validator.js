const formInputs =  document.getElementsByTagName("input");
const submit = document.getElementById('formButton');

// REGEX
const regexSurname = /^[a-zA-Z-\séèàê]{3,}$/
const regexEmail = /^[a-zA-Z-._\d]+@[a-z]+.[a-z]{2,}$/


//FUNCTIONS
const isInputEmpty = () => {
	for(let i = 0; i<= formInputs.length -3; i++){
		if(formInputs[i].value == ""){
      formInputs[i].className = "form-control is-invalid"
		} else {
      formInputs[i].className = "form-control is-valid"

    }
	}
}

const isSurnameCorrect = () => {
  const userSurname = document.getElementById('surnameInput')
  const emptyError = document.getElementById('emptySurname')


    if (!regexSurname.test(userSurname.value)){
      emptyError.innerHTML = "Vous devez rentrer au minimum 3 lettres. Les caractères spéciaux ne sont pas acceptés";
      emptyError.style.color ="red"
      userSurname.className ="form-control is-invalid"
    } else if (regexSurname.test(userSurname.value)){
      emptyError.innerHTML = " ";
      userSurname.className ="form-control is-valid"
  }
}


  const isAgeOver18 = () => {
    const userAge = document.getElementById('ageInput')
    const emptyError = document.getElementById('emptyAge')


      if (userAge.value >= 18){
        userAge.className ="form-control is-valid"
        emptyError.innerHTML = "";

      } else {
        userAge.className ="form-control is-invalid"
        emptyError.innerHTML = "Vous devez être majeur.e";
        emptyError.style.color ="red"
      }
    }

const emailMatchConfirmation = () => {
  const userEmail = document.getElementById('emailInput');
  const userConfirmationEmail = document.getElementById('emailConfirmationInput');
  const emptyError = document.getElementById('emptyEmail');

  if (userEmail.value == userConfirmationEmail.value && regexEmail.test(userEmail.value)){
    userEmail.className ="form-control is-valid"
    userConfirmationEmail.className ="form-control is-valid"
    emptyError.innerHTML = " ";
    return true
  } else if (userEmail.value == userConfirmationEmail.value && !regexEmail.test(userEmail.value)){
    userEmail.className ="form-control is-invalid"
    userConfirmationEmail.className ="form-control is-invalid"
    emptyError.innerHTML = "Attention, votre adrese mail ne respecte pas le format mail";
    emptyError.style.color ="red"

    return false
  } else if (userEmail.value != userConfirmationEmail.value) {
    userEmail.className ="form-control is-invalid"
    userConfirmationEmail.className ="form-control is-invalid"
    emptyError.innerHTML = "Oups, les deux adresses email ne matchent pas !"
    emptyError.style.color ="red"
    return false
  }
}

const passwordMatchConfirmation = () => {
  const userPassword = document.getElementById('passwordInput');
  const userConfirmationPassword = document.getElementById('passwordConfirmationInput');
  const emptyError = document.getElementById('emptyPassword');

  if (userPassword.value == userConfirmationPassword.value && userPassword.value.length >= 6){
    userPassword.className ="form-control is-valid"
    userConfirmationPassword.className ="form-control is-valid"
    emptyError.innerHTML = " ";
    return true
  } else if (userPassword.value == userConfirmationPassword.value && userPassword.value.length < 6){
    userPassword.className ="form-control is-invalid"
    userConfirmationPassword.className ="form-control is-invalid"
    emptyError.innerHTML = "Attention, votre mot de passe doit contenir au moins 6 caractères";
    emptyError.style.color ="red"
    return false
  } else if (userPassword.value != userConfirmationPassword.value) {
    userPassword.className ="form-control is-invalid"
    userConfirmationPassword.className ="form-control is-invalid"
    emptyError.innerHTML = "Oups, les deux mots de passe ne matchent pas !"
    emptyError.style.color ="red"
    return false
  }

}

const areCGUAccepted = () => {
  const cguRadio = document.getElementById('customSwitch1');
  const emptyError = document.getElementById('emptyCGU');


  if (cguRadio.checked){
    emptyError.innerHTML = "Merci !"
    emptyError.style.color ="green"
  } else {
    emptyError.innerHTML = "Vous devez accepter les conditions d'utilisation"
    emptyError.style.color ="red"
  }
}


submit.addEventListener('click', () => {
  isInputEmpty();
  isSurnameCorrect();
  isAgeOver18();
  emailMatchConfirmation();
  passwordMatchConfirmation();
  areCGUAccepted();
});

