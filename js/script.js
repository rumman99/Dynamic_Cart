// Function For Increment//
function increment(quantity, Price, phonePriceIncrement){
    let phoneValue= document.getElementById(quantity).value++;
    document.getElementById(quantity).innerText=phoneValue;
    document.getElementById(Price).innerText=document.getElementById(quantity).value*phonePriceIncrement;
};

// Function For Decrement//
function decrement(quantity, price, phonePriceDecrement){
    if(document.getElementById(quantity).value>1){
        let phoneValue= document.getElementById(quantity).value--;
        document.getElementById(quantity).innerText=phoneValue;
        document.getElementById(price).innerText=document.getElementById(price).innerText-phonePriceDecrement;
    }
    else{
        alert('Minimum Value Must be 1 or more');
    }
};

// Function for Sub-Total Price Increment-Decrement//
function subTotalPrice(Quentity, total, price){
    let Value= parseInt(document.getElementById(Quentity).value);
    let subTotalPrice= Value*price;
    let casePrice= parseInt(document.getElementById(total).innerText)
    let finalSubTotal= subTotalPrice+ casePrice;
    document.getElementById("subTotalPrice").innerHTML= finalSubTotal;
}

// Calculate Tax//
function taxCalculate(){
    let tax= parseInt(document.getElementById("tax").innerText);
    return tax;
}

// Function for Total Price Increment-Decrement//
function totalPrice(subTotalPrice, taxPrice, price){
    let subTotal= parseInt(document.getElementById(subTotalPrice).innerText);
    let tax= taxPrice();
    let finalTotal= subTotal+ tax;
    document.getElementById("totalPrice").innerHTML= finalTotal;
}

// Phone Value Increment//
document.getElementById('phonePlus').addEventListener('click', function(){
    increment("phoneValue", "phonePrice", 1219);
    subTotalPrice("phoneValue", "casePrice", 1219);
    totalPrice("subTotalPrice", taxCalculate);
});

// Phone Value Decrement//
document.getElementById('phoneMinus').addEventListener('click', function(){
    decrement("phoneValue", "phonePrice", 1219);
    subTotalPrice("phoneValue", "casePrice", 1219)
    totalPrice("subTotalPrice", taxCalculate);
});

// Case Value Increment//
document.getElementById('casePlus').addEventListener('click', function(){
    increment("caseValue", "casePrice", 59);
    subTotalPrice("caseValue", "phonePrice", 59);
    totalPrice("subTotalPrice", taxCalculate);
});

// Case Value Decrement//
document.getElementById('caseMinus').addEventListener('click', function(){
    decrement("caseValue", "casePrice", 59);
    subTotalPrice("caseValue", "phonePrice", 59);
    totalPrice("subTotalPrice", taxCalculate);
});



// Remove Item From Cart//
function removeCart(removeItem){
    if(removeItem=='remove1'){
    document.getElementById(removeItem).addEventListener("click", function(){
        const child = document.getElementById('itemSection')
        child.parentNode.removeChild(child);
    });
    }
    else{
    document.getElementById(removeItem).addEventListener("click", function(){
        const child = document.getElementById('itemSection');
        child.parentElement.remove();
        });
    }
}

removeCart('remove1');
removeCart('remove2');




