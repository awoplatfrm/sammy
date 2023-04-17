function Toggle(){
    var change = document.getElementById("typepass");
    if (change.type === "password") {
        change.type="text"
    }
    else {
    change.type="password"
  }
}

