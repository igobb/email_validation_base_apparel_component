function validation() {
    var email = document.getElementById("email").value;
    var error = document.getElementById("error");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const button = document.querySelector(".submit_btn")
    const inputBox = document.querySelector(".input_box")

    button.addEventListener("click", () => {
        if (email.match(pattern))
        {
            inputBox.classList.remove("active")
            error.innerHTML = "Your email is correct!"
            error.style.color = "pink"
        }
        else
        {
            inputBox.classList.add("active")
            error.innerHTML = "Please provide a valid email"
            error.style.color = "red"
        }
    })

}

