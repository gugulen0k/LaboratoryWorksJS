// function checkFields() {
//   let allAreFilled = true;
//   document
//     .getElementById("my-form")
//     .querySelectorAll("[required]")
//     .forEach(function (i) {
//       if (!allAreFilled) return;
//       if (!i.value) allAreFilled = false;
//       if (i.type === "radio") {
//         let radioValueCheck = false;
//         document
//           .getElementById("my-form")
//           .querySelectorAll(`[name=${i.name}]`)
//           .forEach(function (r) {
//             if (r.checked) radioValueCheck = true;
//           });
//         allAreFilled = radioValueCheck;
//       }
//     });
//   if (!allAreFilled) {
//     alert("Fill all the fields");
//   }
// }

// window.onload(alert("Hello"));

const checkName = (e) => {
  const error = document.querySelector(".name-error");
  const lettersRegEx = /^[A-Za-z]+$/;
  if (e.value.length > 1) {
    if (!e.value.match(lettersRegEx)) {
      e.style.borderColor = "lightcoral";
      error.style.display = "block";
      return false;
    } else {
      e.style.borderColor = "white";
      error.style.display = "none";
      return true;
    }
  } else if (e.value.length < 1) {
    e.style.borderColor = "lightcoral";
    return false;
  } else {
    e.style.borderColor = "white";
    return true;
  }
};

const checkPassword = (e) => {
  const error = document.querySelector(".password-error");
  if (e.value.length > 1) {
    if (e.value.length < 6) {
      e.style.borderColor = "lightcoral";
      error.style.display = "block";
      return false;
    } else {
      e.style.borderColor = "white";
      error.style.display = "none";
      return true;
    }
  } else if (e.value.length < 1) {
    e.style.borderColor = "lightcoral";
    return false;
  } else {
    e.style.borderColor = "white";
    return true;
  }
};

const checkTextArea = (e) => {
  if (e.value.length < 1) {
    e.style.borderColor = "lightcoral";
    return false;
  } else if (e.value.length > 1) {
    e.style.borderColor = "white";
    return true;
  }
};

const checkRadios = (radios) => {
  const genderBox = document.getElementById("gender");
  if (radios.length < 1) {
    genderBox.style.border = "2px solid lightcoral";
    return false;
  } else {
    genderBox.style.border = "none";
    return true;
  }
};

const checkCheckboxes = (checkboxes) => {
  const languageBox = document.getElementById("languages-box");
  if (checkboxes.length < 1) {
    languageBox.style.border = "2px solid lightcoral";
    return false;
  } else {
    languageBox.style.border = "none";
    return true;
  }
};

const nameField = document.getElementById("name");
const passwordField = document.getElementById("password");

nameField.addEventListener("input", (e) => {
  checkName(e.target);
});

passwordField.addEventListener("input", (e) => {
  checkPassword(e.target);
});

const checkFields = () => {
  let data = {};
  const name = document.getElementById("name");
  const password = document.getElementById("password");
  const textarea = document.getElementById("instruction");
  const age = document.getElementById("age");
  const radios = document.querySelectorAll('input[type="radio"]:checked');
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  const allFields = [
    checkName(name),
    checkPassword(password),
    checkRadios(radios),
    checkTextArea(textarea),
    checkCheckboxes(checkboxes),
  ];

  const sum = allFields.reduce((acc, num) => acc && num, true);

  if (sum === true) {
    const languages = [];
    checkboxes.forEach((item) => {
      languages.push(item.value);
    });
    data = {
      name: name.value,
      password: password.value,
      gender: radios[0].value,
      age: age.value,
      languages: languages,
      instruction: textarea.value,
    };
    const string = `Name: ${data.name}\nPassword: ${data.password}\nGender: ${data.gender}\nAge: ${data.age}\nLanguages: ${data.languages}\nInstruction: ${data.instruction}`;
    alert(string);
  }
};

const clearFields = () => {
  const name = document.getElementById("name");
  const password = document.getElementById("password");
  const textarea = document.getElementById("instruction");
  const allFields = [name, password, textarea];

  allFields.forEach((e) => {
    e.value = "";
  });
};
