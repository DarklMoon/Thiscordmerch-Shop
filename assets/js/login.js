function checkIn() {
    var inEmail = document.getElementById("Email")
    var inPass = document.getElementById("Pass")
    var getData = JSON.parse(localStorage.getItem("userData"))
    var logIn = document.getElementsByClassName("login")[0]
    var found = false
    var acc = ""
    if (getData == null) {
        alert("Please create Account")
    }
    else {
        for (let i = 0; i < getData.length; i++) {
            if (inEmail.value == getData[i].email && inPass.value == getData[i].pass) {
                // alert("Hi")
                localStorage.setItem("Account", getData[i].fullname)
                found = true
                location.reload();
                break
            }
        }
        if (!found) {
            alert("Incorrect Email or Password")
        }
    }

}
var logIn = document.getElementsByClassName("login")[0]
if (localStorage.getItem("Account")) {
    logIn.innerHTML = ""
    var newElm = document.createElement("h1")
    var txtName = document.createTextNode(localStorage.getItem("Account"))
    newElm.appendChild(txtName)
    newElm.setAttribute("class", "mb-4")
    logIn.appendChild(newElm)
    var newBtn = document.createElement("button")
    var txtBtn = document.createTextNode("Log out")
    newBtn.appendChild(txtBtn)
    newBtn.setAttribute("class", "but2 rounded-0 mb-4 w-25 p-2")
    newBtn.setAttribute("onclick", "checkOut()")
    logIn.appendChild(newBtn)
} else {

}

function checkOut() {
    // alert("Bye")
    localStorage.removeItem("Account")
    location.reload();
}
