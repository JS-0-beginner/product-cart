console.log('Project Under Construction');

/*-------------------------------------------------------------------------------*\
  /////////////////////////////// Buttons \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
function updateProductNumber(product, price, isIncreasing)
{
    //Products
    const productInput = document.getElementById(product + '-number');
    let productInputNumber = productInput.value;
    // if(isIncreasing == true) //Boolean
    if(isIncreasing)
    {
        productInputNumber = parseInt(productInputNumber) + 1;
    }
    else if(productInputNumber > 0)
    {
        productInputNumber = parseInt(productInputNumber) - 1;
    }
    productInput.value = productInputNumber;

    //Total-Product
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInputNumber * price;

    //Calculate Subtotal Price
    calculateSubTotal();
}

/*-------------------------------------------------------------------------------*\
  ///////////////////// Calculate Total \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/

function getInputValue(product)
{
    // const phoneInput = document.getElementById('phone-number').value; //This will also work
    const productInput = document.getElementById(product + '-number')
    const productInputNumber = parseInt(productInput.value); 
    return productInputNumber;
}

function calculateSubTotal()
{
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

/*-------------------------------*\
  //////////// Phone \\\\\\\\\\\\
\*-------------------------------*/

//phone-plus Event
document.getElementById('phone-plus').addEventListener('click',

function()
{
    updateProductNumber('phone',1219,true); //Boolean
}
);
//phone-minus Event
document.getElementById('phone-minus').addEventListener('click',

function()
{
    updateProductNumber('phone',1219,false); //Boolean
}

);

/*-------------------------------*\
  //////////// Case \\\\\\\\\\\\
\*-------------------------------*/

//case-plus Event
document.getElementById('case-plus').addEventListener('click',

function()
{
    updateProductNumber('case',59,true); //Boolean
}

);

//case-minus Event
document.getElementById('case-minus').addEventListener('click',

function()
{
    updateProductNumber('case',59,false); //Boolean
}

);

/*-------------------------------*\
  ////////// Remove-One \\\\\\\\\\
\*-------------------------------*/

document.getElementById('remove-one').addEventListener('click',

function()
         {
        
           const element = document.getElementById("delete-one");
            element.parentNode.removeChild(element);

    document.getElementById('sub-total').innerText = '0';
    document.getElementById('tax-amount').innerText = '0';
    document.getElementById('total-price').innerText = '0';
         }
         
         
);

/*-------------------------------*\
  ////////// Remove-two \\\\\\\\\\
\*-------------------------------*/

document.getElementById('remove-two').addEventListener('click',

function()
         {
        
           const secondElement = document.getElementById("delete-two");
           secondElement.parentNode.removeChild(secondElement);
           document.getElementById('sub-total').innerText = '0';
           document.getElementById('tax-amount').innerText = '0';
           document.getElementById('total-price').innerText = '0';
         }
);