//let transactions = [];
var userId = localStorage.getItem("userId");
//deposit button event handler
const deposit_btn = document.getElementById('deposit-btn');
deposit_btn.addEventListener('click', function(){

    const depositStringToInt = getInputNumb("deposit-amount");

    updateSpanTest("current-deposit", depositStringToInt);
    updateSpanTest("current_balance", depositStringToInt);
    // console.log("Rs" + depositStringToInt + " deposited");

    //setting up the input field blank when clicked
    document.getElementById('deposit-amount').value = "";
    if (localStorage.getItem('transactions')==null) {
        localStorage.setItem('transactions',JSON.stringify([]));
    }
    var old_data = JSON.parse(localStorage.getItem("transactions"));
    var statement = "Self deposit of " + depositStringToInt;
    old_data.push(statement);
    localStorage.setItem("transactions",JSON.stringify(old_data));
})

  //withdraw button event handler
const withdraw_btn = document.getElementById('withdraw-btn');
withdraw_btn.addEventListener('click', function(){
    const withdrawNumb = getInputNumb("withdraw-amount");
    console.log(withdrawNumb);
    if(withdrawNumb>current_balance) {
        alert("Insufficient funds");
    }else {
        

        updateSpanTest("current-withdraw", withdrawNumb);
        updateSpanTest("current_balance", -1 * withdrawNumb);
        
        //setting up the input field blank when clicked
        document.getElementById('withdraw-amount').value = "";
        if (localStorage.getItem('transactions')==null) {
            localStorage.setItem('transactions',JSON.stringify([]));
        }
        var old_data = JSON.parse(localStorage.getItem("transactions"));
        var statement = "Self Withdrawl of " + withdrawNumb;
        console.log(statement);
        old_data.push(statement);
        localStorage.setItem("transactions",JSON.stringify(old_data));
    }
})

 //function to parse string input to int
function getInputNumb(idName){
    const amount = document.getElementById(idName).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanTest(idName, addedNumber){
    //x1.1 updating balance the same way
    const current = document.getElementById(idName).innerText;
    // console.log(current);
    const currentStringToInt = parseFloat(current);

    const total = currentStringToInt + addedNumber;

    //x1.2 setting this value in balance
    document.getElementById(idName).innerText = total;
    // console.log(total);
    localStorage.setItem("balance",total);
    // console.log(balance);
}
var abc = localStorage.getItem("code");
if (abc == "secret") {
    
}
else if (abc == "secret1") {
    window.location.assign("user.html");
} else {
    window.location.href = "index.html";
}