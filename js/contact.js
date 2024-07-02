var okName = false;
var okEmail = false;
var okPhone = false;
var okMessage = false;

function validateName(e) {
  //let nameUser = document.getElementById("name");
  let nameUser =e.currentTarget;
  okName=false
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
  let emailUser =e.currentTarget;
  let errMail= document.getElementById("errorEmail")
  okEmail=false;
  if (!emailUser.value) {
    errMail.hidden = false;
    emailUser.style.borderColor = "red";
    emailUser.style.borderStyle = "solid";
  }else{
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
    if(!isValid.includes('@')){
      errMail.hidden = false;
      emailUser.style.borderColor = "red";
      emailUser.style.borderStyle = "solid";
    }else if(!isValid.includes('.')){
        errMail.hidden = false;
        emailUser.style.borderColor = "red";
        emailUser.style.borderStyle = "solid";
    }else
      okEmail = emailUser.value;
    }
    validateValues();
}

function validatePhone(e) {
  //let phoneNumber = document.getElementById("phone");
  let phoneNumber=e.currentTarget;
  okPhone=false;
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
  let messageUser =e.currentTarget;
  okMessage=false;
  if (messageUser.value.length < 6) {
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
  }
}

function sendForm() {
  let incompleteForm = document.getElementById("errorSubmit");
  if (okName && okEmail && okPhone && okMessage) {
    incompleteForm.hidden = true;
    console.log(okName, okEmail, okPhone, okMessage);
  } else {
    incompleteForm.hidden = false;
    incompleteForm.style.borderColor = "red";
  }
}

let nameForm =document.querySelector("#name");
nameForm.addEventListener('blur', (e) => {
  return validateName(e);
});
let emailForm =document.querySelector("#email");
emailForm.addEventListener('blur', (e) => {
  return validateEmail(e);
});
let phoneForm =document.querySelector("#phone");
phoneForm.addEventListener('blur', (e) => {
  return validatePhone(e);
});
let messageForm =document.querySelector("#message");
messageForm.addEventListener('blur', (e) => {
  return validateMessage(e);
});
let submitForm =document.querySelector("#submitForm");
submitForm.addEventListener('click', (e) => {
  return sendForm(e);
});
