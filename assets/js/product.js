let data_Product = new Object();

function fromCatago(path){
    localStorage.removeItem("data_Product");
    data_Product = {
        image : path[0],
        name : path[1],
        des : path[2],
        sound : path[3],
        artist: path[4]
    };
    localStorage.setItem("data_Product", JSON.stringify(data_Product));
}

function product(){
    let datas = localStorage.getItem("data_Product");
    let picture = document.getElementById("pic-record");
    let name_p = document.getElementById("name-product");
    let content_artist = document.getElementById("content-artist");
    let content_des = document.getElementById("content-des");
    let data = JSON.parse(datas);
    picture.src = data.image;
    name_p.innerHTML = data.name;
    content_artist.innerHTML = data.artist;
    content_des.innerHTML = data.des;
}

var datas = localStorage.getItem("data_Product");
var data = JSON.parse(datas);
var audio = new Audio(data.sound);
var btn_stop = document.getElementById("btn-p");

function musicOn() {
    btn_stop.innerHTML = ' <ellipse cx="65" cy="66" rx="65" ry="66" fill="#116979" /> <rect x="71" y="45" width="12" height="43" fill="white" /> <rect x="47" y="45" width="12" height="43" fill="white" /> '  
    audio.play();
    audio.volume = 0.2;
    btn_stop.onclick = function() {musicOff();}
}

function musicOff(){
    audio.pause();
    audio.currentTime = 0;
    btn_stop.onclick = function() {musicOn();}
    btn_stop.innerHTML = '<ellipse cx="65" cy="66" rx="65" ry="66" fill="#116979"/> <path d="M99 66L48.75 98.909L48.75 33.091L99 66Z" fill="white"/>';
}