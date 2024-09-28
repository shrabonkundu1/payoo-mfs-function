// Add money :
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    
    if (pinNumber === 1234){
        const currentBalance = getTextFieldValueById('current-balance');
        const newBalance = currentBalance + addMoney;
        document.getElementById('current-balance').innerText = newBalance; 
    }
    else {
        alert('Failed to add the money');
    }
})




document.getElementById('btn-cashout-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOutMoney = getInputFieldValueById('input-cashout-money');
    const cashOutPin = getInputFieldValueById('input-cash-out-pin');
    
    if (cashOutPin === 1234){
        const currentBalance = getTextFieldValueById('current-balance');
        const newBalance = currentBalance - cashOutMoney;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else {
        alert('Failed to add the money');
    }
})


// show form for homepage

document.getElementById('btn-show-add-money').addEventListener('click', function(){
    showSectionById('add-money-form');
})

document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    showSectionById('cash-out-form');
})


document.getElementById('btn-show-transection-history').addEventListener('click', function(){
    showSectionById('transection-history-form');
})


