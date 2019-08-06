function showExitButton(){
    if(document.getElementById("nav-check").checked){
        document.getElementById("about").style.display = "block";
        document.getElementById("services").style.display = "block";
        document.getElementById("footer").style.display = "block";
        document.getElementById("contact").style.display = "block";
        document.getElementById("nav-check__label").classList.remove("dropdown-active");
    }else{
        document.getElementById("about").style.display = "none";
        document.getElementById("services").style.display = "none";
        document.getElementById("footer").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("nav-check__label").classList.add("dropdown-active");
    }
    
}