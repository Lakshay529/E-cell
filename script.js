function validateForm(event) {

  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let team = document.getElementById("team").value;
  let idea = document.getElementById("idea").value;

  document.getElementById("name-error").innerHTML = "";
  document.getElementById("email-error").innerHTML = "";
  document.getElementById("phone-error").innerHTML = "";
  document.getElementById("team-error").innerHTML = "";
  document.getElementById("idea-error").innerHTML = "";

  let hasError = false;

  if (name == "") {
    document.getElementById("name-error").innerHTML = "Name cannot be empty";
    hasError = true;
  }

  if (email.includes("@") == false || email.includes(".") == false) {
    document.getElementById("email-error").innerHTML = "Please enter a valid email address";
    hasError = true;
  }

  if (phone.length != 10 || isNaN(phone)) {
    document.getElementById("phone-error").innerHTML = "Phone number must be exactly 10 digits";
    hasError = true;
  }

  if (team == "") {
    document.getElementById("team-error").innerHTML = "Team name is required";
    hasError = true;
  }

  if (idea.length < 20) {
    document.getElementById("idea-error").innerHTML = "Idea description is too short";
    hasError = true;
  }

  if (hasError == false) {
    document.getElementById("form").style.display = "none";
    document.getElementById("success").style.display = "block";
  }
}

function searchStartups() {
  let input = document.getElementById("search-box").value.toLowerCase();
  let cards = document.getElementsByClassName("startup-card");

  for (let i = 0; i < cards.length; i++) {
    let cardText = cards[i].innerText.toLowerCase();

    if (cardText.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}