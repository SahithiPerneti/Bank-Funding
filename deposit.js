//let transactions = [];
var userId = localStorage.getItem("userId");

//withdraw button event handler
// const withdraw_btn = document.getElementById('withdraw-btn');
// withdraw_btn.addEventListener('click', function(){
//     const withdrawNumb = getInputNumb("withdraw-amount");
//     //console.log(withdrawNumb);
//     if(withdrawNumb>current_balance) {
//         alert("Insufficient funds");
//     }else {
        

//         updateSpanTest("current-withdraw", withdrawNumb);
//         updateSpanTest("current_balance", -1 * withdrawNumb);
//         //setting up the input field blank when clicked
//         document.getElementById('withdraw-amount').value = "";
//         if (localStorage.getItem('transactions')==null) {
//             localStorage.setItem('transactions',JSON.stringify([]));
//         }
//         var old_data = JSON.parse(localStorage.getItem("transactions"));
//         var statement = "Fixed deposit of " + withdrawNumb;
//         // console.log(statement);
//         old_data.push(statement);
//         localStorage.setItem("transactions",JSON.stringify(old_data));
//     }
// })

// //function to parse string input to int
// function getInputNumb(idName){
//     const amount = document.getElementById(idName).value;
//     const amountNumber = parseFloat(amount);
//     return amountNumber;
// }

// function updateSpanTest(idName, addedNumber){
//     //x1.1 updating balance the same way
//     const current = document.getElementById(idName).innerText;
//     // console.log(current);
//     const currentStringToInt = parseFloat(current);

//     const total = currentStringToInt + addedNumber;

//     //x1.2 setting this value in balance
//     document.getElementById(idName).innerText = total;
//     // console.log(total);
//     localStorage.setItem("balance",total);
//     // console.log(balance);
// }
function maturity(){
    var p_amount=document.getElementById('p_amount').value;
    var I_rate=document.getElementById('I_rate').value;
    var c_i=document.getElementById('c_i').value;
    var period_months=document.getElementById('period_months').value;
    var irate=I_rate/c_i;
    var m_value=document.getElementById('m_value').value;
    document.getElementById('m_value').value=(Number(document.getElementById('p_amount').value)*Math.pow((1 + irate/100),(Number(document.getElementById('period_months').value)/12*c_i))).toFixed(2)
    console.log(m_value);
}
function reset(){
    document.getElementById('p_amount').value = "";
    document.getElementById('I_rate').value = "";
    document.getElementById('c_i').value = "";
    document.getElementById('period_months').value = "";
    document.getElementById('m_value').value = "";
}
// var abc = localStorage.getItem("code");
// if (abc == "secret") {
    
// }
// // else if (abc == "secret1") {
// //     window.location.assign("user.html");
// // }
//  else {
//     window.location.href = "index.html";
// }