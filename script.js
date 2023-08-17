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