// let datas = localStorage.getItem("data_Product");
// let data = JSON.parse(datas);

function addProduct(){
    document.getElementById("btn-addProduct").style.border = "none";
    document.getElementById("btn-addProduct").style.outline = "none";
    var arrayCart = JSON.parse(localStorage.getItem("data_Cart"));
    if(arrayCart == null)
        arrayCart = [];

    arrayCart.push(data);
    localStorage.setItem("data_Cart", JSON.stringify(arrayCart));
    
}


function getProduct(){
    let orderProduct = document.getElementById("order-product");
    let cart_Container = document.getElementById("cart-container");
    let arrayCart = JSON.parse(localStorage.getItem("data_Cart"));
    let totalCost = document.getElementById("cart-total");
    let count = {};
    let num = 0;
    let allCost = 0;
    if (arrayCart != null){

        arrayCart.forEach(element => {
            // console.log(JSON.stringify(element));
            count[JSON.stringify(element)] = (count[JSON.stringify(element)] || 0) +1;
        });
        console.log(count);
        console.log(Object.entries(count));

        Object.entries(count).forEach((element) => {
            let eachProduct = JSON.parse(element[0]);
            // console.log(eachProduct.image);
            // console.log(element[1]);
            // console.log(element[1] * 10);
            orderProduct.innerHTML += `<div class="product">\
                                <img id="p1" src="${
                                  eachProduct.image
                                }" alt="product">\
                                <h5 class="record-name">${
                                  eachProduct.name
                                }</h5>\
                                <div class="product-num">\
                                    <span id="btn-minus" onclick="buttonMinus(${num})" style="cursor: default;">-</span>\
                                    <input class="num-p" id="num-p-${num}" type="text" value="${
              element[1]
            }">\
                                    <span id="btn-plus" onclick="buttonPlus(${num})" style="cursor: default;">+</span>\
                                </div><br>\
                                <h5>$${element[1] * 10}.00</h5>\
                                <hr class="hr-line1">\
                                </div>`;
            allCost += element[1]*10;
            num += 1;                                                           
        });
    }
    else{
        cart_Container.innerHTML = `<div class="header">\
                                        <h2><b>Your cart</b></h2>\
                                        <hr class="hr-line1">\
                                    </div><br>
                                    <div style="margin-bottom:20vh;">
                                        <center>
                                            <p>Your cart is currently empty.</p><br>
                                            <p>Continue browsing here.</p>
                                        </center>
                                    </div>`;
    }
    totalCost.innerHTML = `${allCost}.00`;
}

function buttonMinus(num){
    let amount_Product = document.getElementById(`num-p-${num}`);
    if (amount_Product.value > 0){
        amount_Product.value = Number(amount_Product.value) - 1;
    }
}

function buttonPlus(num){
    let amount_Product = document.getElementById(`num-p-${num}`);
    amount_Product.value = Number(amount_Product.value) + 1;
    
}

function updateCart(){
    // console.log(localStorage.getItem("data_Cart"));
    let arrayCart = JSON.parse(localStorage.getItem("data_Cart"));
    arrayCart.forEach((element) => {
      console.log(element);     
    });
    // localStorage.setItem("");

    // location.reload();
}

function buyProduct(){

}