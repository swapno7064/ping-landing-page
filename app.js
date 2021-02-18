let form=document.querySelector('.form');
let email=form.querySelector('.email');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const emialVal=email.value.trim();
    let errorDiv=document.querySelector('.error');
    let success=document.querySelector('.success');
    if(emialVal===''){
        success.style.visibility = "hidden";
        errorDiv.style.visibility = "visible";
        errorDiv.innerHTML='email cannot be blank';
    }
    else if(!emialVal.match(mailformat)){
        success.style.visibility = "hidden";
        errorDiv.style.visibility = "visible";
        errorDiv.innerHTML='Not a valid email';
    }
    else{
        success.style.visibility = "visible";
        errorDiv.style.visibility = "hidden";
    }
    
})