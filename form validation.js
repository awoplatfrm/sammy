 let displayPwd = document.getElementById('display');
 console.log(displayPwd)
 displayPwd.addEventListener("click",
function () {
 let pwd = Document.getElementById("pwd");
 pwd.removeAttribute("type", "password");
 pwd.setAttribute('type',"text");
  pwd.type = "text"
 displayPwd.value = 'hide password';
displayPwd.removeAttribute('id', 'display');
    displayPwd.setAttribute('id', 'show');
    displayPwd.setAttribute("onclick","showa()");
    function showa(){
        let displayPwd : HTMLElement | null
    }
}