// Add money :
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    // validation for NAN
    if(isNaN(addMoney)){
        alert('add Money failed');
        return;
    } 
    
    if (pinNumber === 1234){
        const currentBalance = getTextFieldValueById('current-balance');
        const newBalance = currentBalance + addMoney;
        document.getElementById('current-balance').innerText = newBalance; 


          // add to transection history
          const p = document.createElement('p');
          p.classList.add('bg-blue-300')
          p.innerText = `Added : ${addMoney} Tk. New Balance : ${newBalance}`;
    

        //   should be a common function 
        document.getElementById('tracsection-container').appendChild(p)
    }
    else {
        alert('Failed to add the money');
    }
})






// cash out section is going on 


document.getElementById('btn-cashout-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOutMoney = getInputFieldValueById('input-cashout-money');
    const cashOutPin = getInputFieldValueById('input-cash-out-pin');

    // validation for NAN
    if(isNaN(cashOutMoney)){
        alert('cash out failed');
        return;
    } 
    
    if (cashOutPin === 1234){
        const currentBalance = getTextFieldValueById('current-balance');


        if(cashOutMoney > currentBalance){
            alert("don't enough for money");
            return;
        }


        const newBalance = currentBalance - cashOutMoney;
        document.getElementById('current-balance').innerText = newBalance;



        

        // transection system :
        const p = document.createElement('p');
        p.classList.add('bg-green-300');
        p.innerText =  `Widhraw ${cashOutMoney} Tk. New Balance ${newBalance}`;
        document.getElementById('tracsection-container').appendChild(p);



      
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


