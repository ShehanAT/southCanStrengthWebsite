function showExitButton(){
    if(document.getElementById("nav-check").checked){
        document.getElementById("nav-check__label").classList.remove("dropdown-active");
    }else{
        document.getElementById("nav-check__label").classList.add("dropdown-active");
    }
    
}