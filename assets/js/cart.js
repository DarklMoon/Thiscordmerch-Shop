function addProduct(){
    document.getElementById("btn-addProduct").style.border = "none";
    document.getElementById("btn-addProduct").style.outline = "none";
    let dataInArray = JSON.parse(`{"${data.name}" : [1,${datas}]}`);
    var arrayCart = JSON.parse(localStorage.getItem("data_Cart"));
    let check = false;
    if(arrayCart == null)
        arrayCart = [];
        
    if (Object.keys(arrayCart).length != 0) {
        arrayCart.forEach((element) => {
            let eachKeyArray = Object.keys(element)[0];
            let eachNameProduct = JSON.parse(localStorage.getItem("data_Product")).name;
            if(eachKeyArray == eachNameProduct) {
                Object.values(element)[0][0] += 1;
                check = true;
            } 
        });
    } else{
        check = true;
        arrayCart.push(dataInArray);
    }
    if(check == false){
        arrayCart.push(dataInArray);
    }

    localStorage.setItem("data_Cart", JSON.stringify(arrayCart));
    
}

let num_Product = 0;

function getProduct(){
    let orderProduct = document.getElementById("order-product");
    let cart_Container = document.getElementById("cart-container");
    let arrayCart = JSON.parse(localStorage.getItem("data_Cart"));
    let totalCost = document.getElementById("cart-total");
    let allCost = 0;
    if ((arrayCart != null) && (Object.keys(arrayCart).length != 0)){
        Object.values(arrayCart).forEach((element) => {
            let eachProduct = (Object.values(element))[0];

            orderProduct.innerHTML += `<div class="product">\
                                <img id="p1" src="${
                                  eachProduct[1].image
                                }" alt="product">\
                                <h5 class="record-name">${
                                  eachProduct[1].name
                                }</h5>\
                                <div class="product-num">\
                                    <span id="btn-minus" onclick="buttonMinus(${num_Product})" style="cursor: default;">-</span>\
                                    <input class="num-p" id="num-p-${num_Product}" type="text" value="${eachProduct[0]}">\
                                    <span id="btn-plus" onclick="buttonPlus(${num_Product})" style="cursor: default;">+</span>\
                                </div><br>\
                                <h5>$${eachProduct[0] * 10}.00</h5>\
                                <hr class="hr-line1">\
                                </div>`;
            allCost += eachProduct[0]*10;
            num_Product += 1;                                                           
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
                                            <a href="index.html"><p>Continue browsing here.</p></a>
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
    let arrayCart = JSON.parse(localStorage.getItem("data_Cart"));
    console.log(arrayCart);
    arrayCart.forEach(loop);
    function loop(item, index){
        let num_EachProduct = document.getElementById(`num-p-${index}`).value;
        if(num_EachProduct > 0){
            Object.values(item)[0][0] = num_EachProduct;
        }
        else{
            arrayCart.splice(index, 1);
        }
    }
    localStorage.setItem("data_Cart", JSON.stringify(arrayCart));
    location.reload();
}

function buyProduct(){
    let cart_Container = document.getElementById("cart-container");
    
    cart_Container.innerHTML = `<div class="header">\
                                        <h2><b>Thanks for supporting us!</b></h2>\
                                        <hr class="hr-line1">\
                                    </div><br>
                                    <div style="margin-bottom:20vh;">
                                        <center>
                                            <p>You have successfully purchased from our website.</p><br>
                                            <a href="index.html"><p>Do you want to buy more products?</p></a>
                                        </center>
                                    </div>`;
    localStorage.removeItem("data_Cart");

}