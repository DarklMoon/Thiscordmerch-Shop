function checkIn() {
    var inEmail = document.getElementById("Email")
    var inPass = document.getElementById("Pass")
    var getData = JSON.parse(localStorage.getItem("userData"))
    var found = false

    if (getData == null) {
        alert("Please create Account")
    }
    else {
        for (let i = 0; i < getData.length; i++) {
            if (inEmail.value == getData[i].email && inPass.value == getData[i].pass) {
                alert("Hi")
                found = true
                break
                // ------------------ทำต่อส่วนนี้-----------------------
            }           
        }
        if (!found) {
            alert("Incorrect Email or Password")
        }
    }
}
