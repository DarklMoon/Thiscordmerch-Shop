function Create() {
    // alert("hi")
    var inpFname= document.getElementById("fname");
    var inpLname= document.getElementById("lname");
    var inpEmail= document.getElementById("email");
    var inpPass= document.getElementById("password1");

    var toarr

    if (localStorage.getItem("userData") == null) {
        toarr = []
    } else{
        toarr = JSON.parse(localStorage.getItem("userData"))
    }
    console.log(toarr)
    var userData = {
        "fullname" : inpFname.value ,
        "lastname" : inpLname.value ,
        "email" : inpEmail.value ,
        "pass" : inpPass.value ,
    }
    console.log(userData)

    toarr.push(userData)
    localStorage.setItem("userData", JSON.stringify(toarr))
    console.log(toarr)
}
