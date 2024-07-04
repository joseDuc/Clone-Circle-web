var okName = false;
var okEmail = false;
var okPhone = false;
var okMessage = false;

function validateName(e) {
  //let nameUser = document.getElementById("name");
  let nameUser = e.currentTarget;
  okName = false
  if (!nameUser.value) {
    document.getElementById("errorName").hidden = false;
    nameUser.style.borderColor = "red";
    nameUser.style.borderStyle = "solid";
  } else {
    document.getElementById("errorName").hidden = true;
    nameUser.style.borderStyle = "none";
    okName = nameUser.value;
  }
  validateValues();
}

function validateEmail(e) {
  //let emailUser = document.getElementById("email");
  let emailUser = e.currentTarget;
  let errMail = document.getElementById("errorEmail")

  okEmail = false;
  if (!emailUser.value) {
    errMail.hidden = false;
    emailUser.style.borderColor = "red";
    emailUser.style.borderStyle = "solid";
  } else {
    errMail.hidden = true;
    emailUser.style.borderStyle = "none";
    okEmail = emailUser.value;
  }
  /*
  if (!emailUser.value) {
    document.getElementById("errorEmail").hidden = false;
    emailUser.style.borderColor = "red";
    emailUser.style.borderStyle = "solid";
    okEmail = false;
  } else {
    document.getElementById("errorEmail").hidden = true;
    emailUser.style.borderStyle = "none";
    okEmail = emailUser.value;
  }
  var isValid = emailUser.value
    .toLowerCase()
    
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    */
  let isValid = emailUser.value;
  if (!isValid) {
    errMail.hidden = false;
    emailUser.style.borderColor = "red";
    emailUser.style.borderStyle = "solid";
  } else {
    
    if (!isValid.includes('@')) {
      errMail.hidden = false
      emailUser.style.borderColor = "red";
      emailUser.style.borderStyle = "solid";
    } else if (isValid.indexOf('@') < 3) {
      errMail.hidden = false;
      emailUser.style.borderColor = "red";
      emailUser.style.borderStyle = "solid";
    } else if (!isValid.includes('.')) {
      errMail.hidden = false;
      emailUser.style.borderColor = "red";
      emailUser.style.borderStyle = "solid";
    } else if (isValid.length < isValid.lastIndexOf('.') + 3) {
      errMail.hidden = false;
      emailUser.style.borderColor = "red";
      emailUser.style.borderStyle = "solid";
    } else
      okEmail = emailUser.value;
  }
  validateValues();
}

function validatePhone(e) {
  //let phoneNumber = document.getElementById("phone");
  let phoneNumber = e.currentTarget;
  okPhone = false;
  if (!phoneNumber.value) {
    document.getElementById("errorPhone").hidden = false;
    phoneNumber.style.borderColor = "red";
    phoneNumber.style.borderStyle = "solid";
  } else {
    document.getElementById("errorPhone").hidden = true;
    phoneNumber.style.borderStyle = "none";
    okPhone = phoneNumber.value;
  }
  validateValues();
}

function validateMessage(e) {
  //let messageUser = document.getElementById("message");
  let messageUser = e.currentTarget;
  let s=messageUser.value.trim();
  okMessage = false;

  if (s.length < 15) {
    document.getElementById("errorMessageUser").hidden = false;
    messageUser.style.borderColor = "red";
    messageUser.style.borderStyle = "solid";
  } else {
    document.getElementById("errorMessageUser").hidden = true;
    messageUser.style.borderStyle = "none";
    okMessage = messageUser.value;
  }
  validateValues();
}

function validateValues() {
  if (okName && okEmail && okPhone && okMessage) {
    document.getElementById("errorSubmit").hidden = true;
    return true;
  }
  return false;
}

function sendForm() {
  let errorForm = document.getElementById("errorSubmit");
  if (validateValues()){
    errorForm.hidden = true;
    console.log(okName, okEmail, okPhone, okMessage);
  }else{
    errorForm.hidden = false;
    errorForm.style.borderColor = "red";
  }
  //if (okName && okEmail && okPhone && okMessage) {
  //  errorForm.hidden = true;
  //  console.log(okName, okEmail, okPhone, okMessage);
  //} else {
  //  errorForm.hidden = false;
  //  errorForm.style.borderColor = "red";
 // }
}


document.querySelector("#name").addEventListener('blur', (e) => {
  return validateName(e);
});

document.querySelector("#email").addEventListener('blur', (e) => {
  return validateEmail(e);
});

document.querySelector("#phone").addEventListener('blur', (e) => {
  return validatePhone(e);
});

document.querySelector("#message").addEventListener('blur', (e) => {
  return validateMessage(e);
});

document.querySelector("#submitForm").addEventListener('click', (e) => {
  return sendForm(e);
});
