function showExitButton(){
    if(document.getElementById("nav-check").checked){
        document.getElementById("about").style.display = "block";
        document.getElementById("services").style.display = "block";
        document.getElementById("footer").style.display = "block";
        document.getElementById("contact").style.display = "block";
        document.getElementById("nav-links").style.height = "0px";
        document.getElementById("nav-check__label").classList.remove("dropdown-active");
    }else{
        document.getElementById("about").style.display = "none";
        document.getElementById("services").style.display = "none";
        document.getElementById("footer").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("nav-links").style.height = "calc(100vh - 50px)";
        document.getElementById("nav-check__label").classList.add("dropdown-active");
    }
    
}
function showContactExitButton(){
    if(document.getElementById("nav-check").checked){
        document.getElementById("enquiry").style.display = "block";
        document.getElementById("nav-links").style.height = "0px";
        
        //enables css animation on hamburger icon 
        document.getElementById("nav-check__label").classList.remove("dropdown-active");
    }else{
        document.getElementById("enquiry").style.display = "none";
        document.getElementById("nav-links").style.height = "calc(100vh - 50px)";
        //enables css animation on hamburger icon 
        document.getElementById("nav-check__label").classList.add("dropdown-active");
    } 
}

function showSection(){
    document.getElementById("about").style.display = "block";
    document.getElementById("services").style.display = "block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("contact").style.display = "block";
    document.getElementById("nav-links").style.height = "0px";
    document.getElementById("nav-check").checked = false;
    document.getElementById("nav-check__label").classList.remove("dropdown-active");
}
function goToContactPage(){
    window.location.href = "https://shehanat.github.io/southCanStrengthWebsite/contactPage/#enquiry";   
}
