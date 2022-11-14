function addProduct(){
    // console.log("Test1");
    document.getElementById("btn-addProduct").style.border = "none";
    document.getElementById("btn-addProduct").style.outline = "none";
}

let data_Product = new Object();

function fromCatago(path){
    localStorage.removeItem("data_Product");
    console.log(path);
    data_Product = {
        image : path[0],
        name : path[1],
        des : path[2],
        sound : path[3]
    };
    localStorage.setItem("data_Product", JSON.stringify(data_Product));
}

function product(){
    let datas = localStorage.getItem("data_Product");
    let picture = document.getElementById("pic-record");
    let name_p = document.getElementById("name-product");
    let content_des = document.getElementById("content-des");
    let data = JSON.parse(datas);
    picture.src = data.image;
    name_p.innerHTML = data.name;
    content_des.innerHTML = data.des;


}

function musicOn() {
    let datas = localStorage.getItem("data_Product");
    let data = JSON.parse(datas);
    let audio = new Audio(data.sound);

    audio.play();

}