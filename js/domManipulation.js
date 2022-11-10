//form validation
const form = document.forms["contactForm"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = form["email"].value;
  let song = form["song"].value;
  let reason = form["textbox"].value;
  let pol = form["pol"].value;
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  if (!validateEmail(email)) {
    alert("Email isn't valid");
    return false;
  }
  if (song == "") {
    alert("Song must be filled out");
    return false;
  }

  if (reason !== "") {
    alert(
      `${email} je predlozio da stavimo ovu pesmu u nasu plejlistu: ${song}. Razlog je sledeći: ${reason}. Pol je ${pol}`
    );
  } else {
    alert(
      `${email} je predlozio da stavimo ovu pesmu u nasu plejlistu: ${song}. Nema poseban razlog zbog čega. Pol je ${pol}`
    );
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
