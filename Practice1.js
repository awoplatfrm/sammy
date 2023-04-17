let changepass = document.getElementById("show");
changepass.addEventListener("click", function(){
    let change1 = document.getElementById("pass");
    change1.removeAttribute("type", "password")
    change1.setAttribute("type", "text");
})
//     change1.value = "text"
//     changepass.value = "hide password";
//     changepass.removeAttribute("id", "show");
//     changepass.setAttribute("id", "display");
//     changepass.setAttribute("onclick", sammy());

// })
// function sammy(){
//     change1.value= "password"
//     changepass.value = "show password"
//     changepass.removeAttribute("onclick", sammy());
// }