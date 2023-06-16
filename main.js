function verify(){
    var input = document.getElementById('my-input').value;


    var regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,3}$/;
    
    if (input.match(regExp)){
        alert('You entered a valid email address');
    }
    else{
        alert('You entered an invalid email address');
    }
}