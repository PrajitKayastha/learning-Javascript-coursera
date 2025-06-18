let price1;
let price2;
let price3;
let quantity1;
let quantity2;
let quantity3;

function calculateBill(){
     price1 = parseFloat(document.getElementById('price1').value);
     price2 = parseFloat(document.getElementById('price2').value);
     price3 = parseFloat(document.getElementById('price3').value);
     quantity1 = parseFloat(document.getElementById('quantity1').value);
     quantity2 = parseFloat(document.getElementById('quantity2').value);
     quantity3 = parseFloat(document.getElementById('quantity3').value);

    price1 = price1 * quantity1;
    price2 = price2 * quantity2;
    price3 = price3 * quantity3;

    
    let total =  price1 + price2 + price3;

    document.getElementById('result').innerText = `Your total bill is Rs. ${total}`;
}