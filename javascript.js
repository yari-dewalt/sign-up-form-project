const check = function() {
    let password = document.getElementById("password");
    let password_confirm = document.getElementById("password-confirm");

    if (password.value == password_confirm.value)
        {
            password.setCustomValidity("");
            password_confirm.setCustomValidity("");
        }
    else
    {
        password_confirm.setCustomValidity(" ");
        password.setCustomValidity("Passwords are not the same");

    }
}