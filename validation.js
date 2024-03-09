function validateForm(){
    var name=document.getElementById('name').value;
    var phone number=document.getElementById('phone number').value;
    var password=document.getElementById('password').value;
    var errorDiv=document.getElementById('error');

    errorDiv.innerHTML = '';

    if(name ===''){
        showError('Name is required');
        return false;
    }

    if(phone number ===''){
        showError('Phone number is required');
        return false;
    }

    if(password ===''){
        showError('Pin is required');
        return false;
    }

    function showError(message){
        var errorDiv= document.getElementById('error');
        var errorParagraph= document.getElementById('p');
        errorParagraph.textContent=message;
        errorDiv.appendChild(errorParagraph)
    }

    var form=document.getElementById('myform');
    form.addEventListener('submit',function(event)){
        event.preventDefault();
        if(validateForm()){
            form.onsubmit();
        }
    }


};