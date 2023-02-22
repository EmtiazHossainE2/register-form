let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

const validateName = () => {
  let fullName = document.getElementById('fullName').value
  // console.log(name)
  if (fullName.length === 0) {
    nameError.innerHTML = 'Name is required !'
    return false
  }
  else if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Write your full name !'
    return false
  }
  nameError.innerHTML = ''
  return true
}

const validateEmail = () => {
  let email = document.getElementById('email').value
  // console.log(email)
  if (email.length === 0) {
    emailError.innerHTML = 'Email is required '
    return false
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = 'Please provide valid email ! '
    return false
  }
  emailError.innerHTML = ' '
  return true
}

const validatePhone = () => {
  let phone = document.getElementById('phone').value
  // console.log(phone)
  if (phone.length === 0) {
    phoneError.innerHTML = 'Number is required !'
    return false
  }
  else if (phone.length !== 10) {
    phoneError.innerHTML = 'Number should be 10 digits !'
    return false
  }
  else if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = 'Please provide valid number !'
    return false
  }
  phoneError.innerHTML = ' '
  return true
}

// Form Submit 
const validateForm = (e) => {
  e.preventDefault()
  if (!validateName() || !validateEmail() || !validatePhone()) {
    return false
  }
  else {
    modal.style.display = "block";
    e.target.reset();
  }
}


// Modal 
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}










