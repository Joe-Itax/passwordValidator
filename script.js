//Control de see/hidden the password
const eyeIcon = document.querySelector(".eyeIcon");
const iconI = document.querySelector(".ri-eye-line");
const input = document.querySelector("#inputPassword");
eyeIcon.addEventListener("click", function() {
  if (iconI.className === "ri-eye-line") {
    iconI.className = "ri-eye-close-line";
    input.type = "text";
    eyeIcon.title = "Cacher le mot de passe";
  } else {
    iconI.className = "ri-eye-line";
    input.type = "password";
    eyeIcon.title = "Voir le mot de passe";
  }
})



//Fonction de controle de mot de passe
const includeLower = /[a-z]/;
const includeUpper = /[A-Z]/;
const includeNumber = /[0-9]/;
//const _includeSpecial = "$*!:;,?./§%£ø*\\#~@{}[]`|^+)(=&";
const includeSpecialChar = /[$*!:;,?"'`\\./§%£ø*\#~@{}\[\]`|^+)(=&]/;
// const inputValue = input.value;
//Longueur du password
const valideIconLength = document.querySelector("#valideIconLength");
const nonValideIconLength = document.querySelector("#nonValideIconLength");
//Chiffre dans le password
const valideIconNumber = document.querySelector("#valideIconNumber");
const nonValideIconNumber = document.querySelector("#nonValideIconNumber");
//Majuscule dans le password
const valideIconUpper = document.querySelector("#valideIconUpper");
const nonValideIconUpper = document.querySelector("#nonValideIconUpper");
//Miniscule dans le password
const valideIconLower = document.querySelector("#valideIconLower");
const nonValideIconLower = document.querySelector("#nonValideIconLower");
//Special char
const valideIconSpecialChar = document.querySelector("#valideIconSpecialChar");
const nonValideIconSpecialChar = document.querySelector("#nonValideIconSpecialChar");
///-------
const verification = function() {
  //Verification Du length du password
  document.querySelector(".lengthPwdFeedback").innerHTML = `Longueur de votre mot de passe: ${input.value.length}`;
  if (input.value.length < 8) {
    valideIconLength.style.display = "none";
    nonValideIconLength.style.display = "initial";
  } else {
    valideIconLength.style.display = "initial";
    nonValideIconLength.style.display = "none";
  }

  //Verification Des Chiffre
  if (includeNumber.test(input.value)) {
    valideIconNumber.style.display = "initial";
    nonValideIconNumber.style.display = "none";
  } else {
    valideIconNumber.style.display = "none";
    nonValideIconNumber.style.display = "initial";
  }

  //Verification Miniscule
  if (includeLower.test(input.value)) {
    valideIconLower.style.display = "initial";
    nonValideIconLower.style.display = "none";
  } else {
    valideIconLower.style.display = "none";
    nonValideIconLower.style.display = "initial";
  }

  //Verification Majuscule
  if (includeUpper.test(input.value)) {
    valideIconUpper.style.display = "initial";
    nonValideIconUpper.style.display = "none";
  } else {
    valideIconUpper.style.display = "none";
    nonValideIconUpper.style.display = "initial";
  }

  //Verification Caractere special
  if (includeSpecialChar.test(input.value)) {
    valideIconSpecialChar.style.display = "initial";
    nonValideIconSpecialChar.style.display = "none";
  } else {
    valideIconSpecialChar.style.display = "none";
    nonValideIconSpecialChar.style.display = "initial";
  }
}
input.addEventListener("input", verification);

function focusState() {
  document.querySelector(".boiteAVerifier").style.display = "block";
}
input.addEventListener("focus", focusState);
input.addEventListener("blur", focusState);
