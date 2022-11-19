// let datas = localStorage.getItem("data_Product");
// let data = JSON.parse(datas);

function addProduct(){
    document.getElementById("btn-addProduct").style.border = "none";
    document.getElementById("btn-addProduct").style.outline = "none";
    let dataInArray = JSON.parse(`{"${data.name}" : [1,${datas}]}`);
    var arrayCart = JSON.parse(localStorage.getItem("data_Cart"));
    if(arrayCart == null)
        arrayCart = [];
    console.log(dataInArray);
    // console.log(Object.keys(arrayCart).length == 0);
        
    if (Object.keys(arrayCart).length != 0) {
      console.log(1);
      arrayCart.forEach((element) => {
        let eachKeyArray = Object.keys(element)[0];
        let eachNameProduct = JSON.parse(localStorage.getItem("data_Product")).name;
        if(eachKeyArray == eachNameProduct) {
            console.log(arrayCart);
            Object.values(element)[0][0] += 1;
        } 
        else {
          arrayCart.push(dataInArray);
        }
      });
    } else {
        console.log(2);
        arrayCart.push(dataInArray);
    }
    console.log(arrayCart);
    // console.log(arrayCart);
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
            console.log((Object.keys(element))[0]);
            console.log(JSON.parse(localStorage.getItem("data_Product")).name);
            if (Object.keys(element)[0] == JSON.parse(localStorage.getItem("data_Product")).name){
                // Object.values(element)[0][0] += 1;
                console.log((Object.values(element))[0]);
            }
              count[JSON.stringify(element)] =
                (count[JSON.stringify(element)] || 0) + 1;
        });
        sessionStorage.setItem("amount_Product", JSON.stringify(count));
        // console.log(Object.entries(count));

        Object.values(arrayCart).forEach((element) => {
            let eachProduct = (Object.values(element))[0];
            // console.log(eachProduct);
            // console.log(element[1]);
            // console.log(element[1] * 10);

            orderProduct.innerHTML += `<div class="product">\
                                <img id="p1" src="${
                                  eachProduct[1].image
                                }" alt="product">\
                                <h5 class="record-name">${
                                  eachProduct[1].name
                                }</h5>\
                                <div class="product-num">\
                                    <span id="btn-minus" onclick="buttonMinus(${num})" style="cursor: default;">-</span>\
                                    <input class="num-p" id="num-p-${num}" type="text" value="${eachProduct[0]}">\
                                    <span id="btn-plus" onclick="buttonPlus(${num})" style="cursor: default;">+</span>\
                                </div><br>\
                                <h5>$${eachProduct[0] * 10}.00</h5>\
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
    // let countProduct = JSON.parse(sessionStorage.getItem("amount_Product"));
    // let arrayCart = JSON.parse(localStorage.getItem("data_Cart"));

    // console.log(count);
    // countProduct.forEach(element => console.log(element));


    // arrayCart.forEach((element) => {
    //   console.log(element);     
    // });


    // location.reload();
}

function buyProduct(){

}