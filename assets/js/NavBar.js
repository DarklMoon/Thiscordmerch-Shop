function openNav() {
  document.getElementById("SideNav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
  document.getElementById(
    "Menu"
  ).innerHTML = `<a href="#Menu" onclick="closeNav()"><i class="material-icons">&#xe14c;</i></a>`;
  document.getElementById("main").style.position = "fixed";
}

function closeNav() {
  document.getElementById("SideNav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById(
    "Menu"
  ).innerHTML = `<a href="#Menu" onclick="openNav()"><i class="material-icons">&#xe5d2;</i></a>`;
  document.bodygetElementById("main").style.position = "absolute";
}
