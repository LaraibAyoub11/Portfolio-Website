let contact = document.querySelector("div#contact") ;

function contactPage(){
    contact.style.display = "block" ;
}

function hideContact(){
    contact.style.display = "none" ;
}

function emptyFields(){
    document.querySelectorAll(".fields").forEach(field => {
        field.value = "" ;
    }) ;
}