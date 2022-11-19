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
        "firstname": inpFname.value,
        "lastname": inpLname.value,
        "email": inpEmail.value,
        "pass": inpPass1.value,
    }

    if (localStorage.getItem("userData") == null) {
        toarr = []
    } else {
        toarr = JSON.parse(localStorage.getItem("userData"))

    }

    if (inpFname.value.length < 4) {
        document.getElementById("ErrFName").innerText = 'First name is too short.';
        check = true
    }
    else {document.getElementById("ErrFName").innerText = ''}
    
    if (inpLname.value.length < 4) {
        document.getElementById("ErrLName").innerText = 'Last name is too short.';
        check = true
    }
    else {document.getElementById("ErrLName").innerText = ''}
    
    if (inpEmail.value.length < 5) {
        document.getElementById("ErrEmail").innerText = 'Invalid email.';
        check = true
    }
    else {document.getElementById("ErrEmail").innerText = ''} 
    
    if (inpPass1.value == '' && inpPass2.value == '') {
        document.getElementById("ErrPass").innerText = 'Please input password.';
        check = true
    }
    else if (inpPass1.value !== inpPass2.value) {
        document.getElementById("ErrPass").innerText = 'Password do not match.';
        check = true
    }
    else {document.getElementById("ErrPass").innerText = ''}

    if(!check){
        toarr.push(userData)
        localStorage.setItem("userData", JSON.stringify(toarr))
        alert("Successfully created your Account")
        location.assign("login.html")
    }

}
