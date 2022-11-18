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
    let count = {};
    if (arrayCart != null){

        arrayCart.forEach(element => {
            // console.log(JSON.stringify(element));
            count[JSON.stringify(element)] = (count[JSON.stringify(element)] || 0) +1;
        });
        console.log(count);
        console.log(Object.entries(count));

        Object.entries(count).forEach((element) => {
            let eachProduct = JSON.parse(element[0]);
            console.log(eachProduct.image);
            console.log(element[1]);
            console.log(element[1] * 10);
        });
        
        orderProduct.innerHTML = `<div class="product">\
                            <img id="p1" src="${arrayCart[0].image}" alt="product">\
                            <h5 class="record-name">${arrayCart[0].name}</h5>\
                            <div class="product-num">\
                                <span class="btn-minus">-</span>\
                                <input id="num-p" type="text" value="1">\
                                <span class="btn-plus">+</span>\
                            </div><br>\
                            <h5>$10.00</h5>\
                            </div>`;
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

}
