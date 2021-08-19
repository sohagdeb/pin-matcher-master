function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinValue = pin +'';
    if(pinValue.length==4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pin=getPin();
    document.getElementById('generate-input').value=pin;
}
document.getElementById('key-pad').addEventListener('click',function(event){
    const keyValue = event.target.innerText;
    const keyInput = document.getElementById('key-input');
    if(isNaN(keyValue)){
        if(keyValue=='C'){
            keyInput.value='';
        }

    }
    else{
        const keyInput = document.getElementById('key-input');
        const previousNumber = keyInput.value;
        const newNumber = previousNumber+keyValue;
        keyInput.value=newNumber;
    }
    
}) 
document.getElementById('submit-button').addEventListener('click',function(){
    const generateInput = document.getElementById('generate-input').value;
    const keyInput = document.getElementById('key-input').value;
    const notifyError = document.getElementById('notify-error');
    const notifySuccess = document.getElementById('notify-success');
    if(generateInput==keyInput){
        notifySuccess.style.display='block';
        notifyError.style.display='none';
    }
    else{
        notifyError.style.display='block';
        notifySuccess.style.display='none';
    }

})  