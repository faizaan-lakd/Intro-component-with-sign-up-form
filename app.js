let firstName = document.getElementById("fName");
let lastName = document.getElementById("lName");
let emailID = document.getElementById("emailID");
let userPassword = document.getElementById("password");
let userForm = document.getElementById("userForm");

userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    errorMsgFunc = (element, errorMsg) => {
        element.value = "";
        let errorMsgContainer = element.nextElementSibling;
        errorMsgContainer.textContent = errorMsg;
        errorMsgContainer.style.display = "block";
    }

    clearMsgFunc = (element) => {
        element.classList.remove("input-form-error");
        element.nextElementSibling.style.display = "none";
    }

    if (firstName.value.trim() === "") {
        errorMsgFunc(firstName, "First Name cannot be empty");
        firstName.classList.add("input-form-error");
    } else {
        clearMsgFunc(firstName);
        firstName.classList.remove("input-form-error");
    }

    if (lastName.value.trim() === "") {
        errorMsgFunc(lastName, "Last Name cannot be empty");
        lastName.classList.add("input-form-error");
    } else {
        clearMsgFunc(lastName);
        lastName.classList.remove("input-form-error");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailID.value)) {
        errorMsgFunc(emailID, "Looks like this is not an email");
        emailID.classList.add("input-form-error");
        emailID.placeholder = "email@example/com";
    } else {
        emailID.placeholder = "Email Address";
        clearMsgFunc(emailID);
        emailID.classList.remove("input-form-error");
    }

    if (userPassword.value.trim() === "") {
        errorMsgFunc(userPassword, "Password cannot be empty");
        userPassword.classList.add("input-form-error");
    } else {
        clearMsgFunc(userPassword);
        userPassword.classList.remove("input-form-error");
    }
});