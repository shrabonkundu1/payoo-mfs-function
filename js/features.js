// common function 


// Input function :
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const  inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}


// Text function :
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}


// Show section by id
function showSectionById(id) {
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transection-history-form').classList.add('hidden');

    // show the seciton with the provide id as parametter 
    document.getElementById(id).classList.remove('hidden');
}
