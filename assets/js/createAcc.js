function Create() {
    // alert("hi")
    var inpFname = document.getElementById("fname");
    var inpLname = document.getElementById("lname");
    var inpEmail = document.getElementById("email");
    var inpPass1 = document.getElementById("password1");
    var inpPass2 = document.getElementById("password2");
    var check = false
    var toarr
    var userData = {
        "fullname": inpFname.value,
        "lastname": inpLname.value,
        "email": inpEmail.value,
        "pass": inpPass1.value,
    }

    if (localStorage.getItem("userData") == null) {
        toarr = []
    } else {
        toarr = JSON.parse(localStorage.getItem("userData"))

    }

    if (inpFname.value.length < 5 || inpLname.value.length < 5) {
        alert("Name is too short")
        check = true
    }
    if (inpEmail.value.length < 5) {
        alert("Email is invalid")
        check = true
    } 
    if (inpPass1.value !== inpPass2.value) {
        alert("Password do not match")
        check = true
    } 
    if(!check){
        toarr.push(userData)
        localStorage.setItem("userData", JSON.stringify(toarr))
        alert("Already created your Account")
        location.assign("login.html")
    }

}
