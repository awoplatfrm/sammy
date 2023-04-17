// function josh() {
//     var changepwd = document.getElementById("control");
//     if( changepwd.type==="password") {
//         changepwd.type="text"
//     }
    
//     else {
//         changepwd.type ="password"
//     }
// }
// function validationprofile ( username, password){
//     username = document.getElementById("name").value.trim();
//     password = document.querySelector("#pwd").value.trim();
//     let info = document.querySelector('#info');
//     if(username.length) 

// }
let displayPwd = document.getElementById('display');
console.log(displayPwd)
displayPwd.addEventListener('click', function(){
    let pwd = document.getElementById('pwd');
    pwd.removeAttribute('type', 'password');
    pwd.setAttribute('type', 'text');
    pwd.type = 'text'
    displayPwd.value = 'Hide password';
    displayPwd.removeAttribute('id', 'display');
    displayPwd.setAttribute('id', 'show')
    displayPwd.setAttribute('onclick', 'showa()');
})
function showa(){
    pwd.type = 'password';
    displayPwd.value = 'Show password';
    displayPwd.removeAttribute('onclick', 'showa()')
}
// write a function to validate user input
// username
// password
function validateProfile (username, password){
    username = document.getElementById("name").value.trim();
    password = document.querySelector("#pwd").value.trim();
    let info  = document.querySelector("#info");
    if(username.length>0 && password.length>0){
        let pattern = /[a-z][?,#@!*]{1,}/i
        if(pattern.test(username)){
            // validate user password
            pattern = /[0-9]{2,}[a-z]{2,}[%,#@!*]{1,}/i
            if(pattern.test(password)){
                alert('username and password verified')
                return
            }
            alert('invalid password')
        }else{
            alert('name verification failed');
        }
    }else{
        info.innerHTML = "<p style='background-color:red; color:white'>fill the require space</p>";
        console.log("no users");
    }
}