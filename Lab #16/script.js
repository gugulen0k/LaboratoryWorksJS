let totalPrice = document.getElementById("total-price");

function checkTotal() {
  totalPrice.value = "";
  var sum = 0;
  for (i = 0; i < document.books.book.length; i++) {
    if (document.books.book[i].checked) {
      sum = sum + parseFloat(document.books.book[i].value);
    }
  }
  totalPrice.value = sum;
}

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const validateDate = (date) => {
  const re = /^(0?[1-9]|[12][0-9]|3[01])[\/\\](0?[1-9]|1[012])[\/\\]\d{4}$/;
  return re.test(String(date).toLowerCase());
};

const checkInputs = () => {
  const hobbyCheckboxes = document.querySelectorAll(
    'input[name="hobby"]:checked'
  );
  const newsletterCheckboxes = document.querySelectorAll(
    'input[name="newsletter"]:checked'
  );

  if (hobbyCheckboxes.length === 0)
    document.getElementById("hobby-error").style.display = "block";
  else document.getElementById("hobby-error").style.display = "none";

  if (newsletterCheckboxes.length === 0)
    document.getElementById("newsletter-error").style.display = "block";
  else document.getElementById("newsletter-error").style.display = "none";

  if (document.getElementById("name").value.length === 0)
    document.getElementById("name-error").style.display = "block";
  else document.getElementById("name-error").style.display = "none";

  if (!validateEmail(document.getElementById("email").value))
    document.getElementById("email-error").style.display = "block";
  else document.getElementById("email-error").style.display = "none";

  if (
    document.getElementById("password").value.length < 4 ||
    document.getElementById("password").value.length > 8
  )
    document.getElementById("password-error").style.display = "block";
  else document.getElementById("password-error").style.display = "none";

  if (
    document.getElementById("confirm-password").value !==
    document.getElementById("password").value
  )
    document.getElementById("confirm-error").style.display = "block";
  else document.getElementById("confirm-error").style.display = "none";

  if (!validateDate(document.getElementById("date").value))
    document.getElementById("date-error").style.display = "block";
  else document.getElementById("date-error").style.display = "none";

  if (document.getElementById("country").value === "0")
    document.getElementById("country-error").style.display = "block";
  else document.getElementById("country-error").style.display = "none";
};

const checkInputs2 = () => {
  const error = document.getElementById("error-block");

  if (document.getElementById("login").value.length === 0) {
    error.style.display = "block";
    error.textContent = "Enter login";
    document.getElementById("login").style.borderColor = "#f89999";
    return;
  } else {
    document.getElementById("login").style.borderColor = "#d8cdcd";
    error.style.display = "none";
  }

  if (document.getElementById("password2").value.length < 6) {
    error.style.display = "block";
    error.textContent = "Password is too short";
    document.getElementById("password2").style.borderColor = "#f89999";
    return;
  } else {
    document.getElementById("password2").style.borderColor = "#d8cdcd";
    error.style.display = "none";
  }

  if (
    document.getElementById("confirm-password2").value !==
    document.getElementById("password2").value
  ) {
    error.style.display = "block";
    error.textContent = "Passwords don't match";
    document.getElementById("confirm-password2").style.borderColor = "#f89999";
    return;
  } else {
    document.getElementById("confirm-password2").style.borderColor = "#d8cdcd";
    error.style.display = "none";
  }

  if (!validateEmail(document.getElementById("email2").value)) {
    error.style.display = "block";
    error.textContent = "Incorrect email";
    document.getElementById("email2").style.borderColor = "#f89999";
    return;
  } else {
    document.getElementById("email2").style.borderColor = "#d8cdcd";
    error.style.display = "none";
  }

  if (document.getElementById("about-me").value.length === 0) {
    error.style.display = "block";
    error.textContent = "Write something about yourself";
    document.getElementById("about-me").style.borderColor = "#f89999";
    return;
  } else {
    document.getElementById("about-me").style.borderColor = "#d8cdcd";
    error.style.display = "none";
  }
};
