// declare the variables we will need for the shopping cart
let itmqty= 0
let itemprice =0
let totprice = 0

//get the item price as a number
let costp=document.getElementById("item-cost")
let x = costp.textContent.indexOf('$')
let x2 = costp.textContent.indexOf(' ')
itemprice = costp.textContent.substring(x+1,x2)

//function to dynamically update totals
function updatetots(){
let totqty= document.querySelector('.total-quantity')
 totqty.textContent = "Quantity: " + itmqty

 let carttotal= document.querySelector('.total-price')
 carttotal.textContent = 'Total Price available at checkout ' + '$' + totprice
 
}

//add event listener for down buttons
let qtydown = document.getElementById('quantity-down')
qtydown.addEventListener('click', function()
{
     if(itmqty>0) {
         itmqty=itmqty-1
     totprice= itmqty*itemprice 
     updatetots()
     } else {
         itmqty=0
     totprice=0
     updatetots()
}
}

)

//add event listener for up buttons
let qtyUp = document.getElementById('quantity-up')
qtyUp.addEventListener('click', function()
{
 itmqty = itmqty+1
 totprice= itmqty*itemprice  
 updatetots()
 
}
)
let btnremove = document.querySelector('.remove')
btnremove.addEventListener ('click', function ()
{
    itmqty=0
    totprice=0
     updatetots()
 }
 
)

