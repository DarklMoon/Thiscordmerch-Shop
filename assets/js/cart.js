// let datas = localStorage.getItem("data_Product");
// let data = JSON.parse(datas);

function addProduct(){
    var arrayCart = JSON.parse(localStorage.getItem("data_Cart"));
    if(arrayCart == null)
        arrayCart = [];

    arrayCart.push(data);
    localStorage.setItem("data_Cart", JSON.stringify(arrayCart));
    
}


function getProduct(){
    let orderProduct = document.getElementById("order-product");
    document.getElementById("btn-addProduct").style.border = "none";
    document.getElementById("btn-addProduct").style.outline = "none";
    console.log(data);
    console.log(orderProduct);

    orderProduct.innerHTML = `<div class="product">\
                        <img id="p1" src="${data.image}" alt="product">\
                        <h5 class="record-name">${data.name}</h5>\
                        <div class="product-num">\
                            <span class="btn-minus">-</span>\
                            <input id="num-p" type="text" value="1">\
                            <span class="btn-plus">+</span>\
                        </div><br>\
                        <h5>$10.00</h5>\
                        </div>`

}
