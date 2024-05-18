//sessione non avviata e se clicchi su collegamento ad una pagina, si scarica un file html
function darkmode() {
    let element = document.body;
    if(sessionStorage.getItem("darkmode")=="false"){
        element.classList.add("dark-mode");
        sessionStorage.setItem("darkmode", "true");
    }else{
        element.classList.remove("dark-mode");
        sessionStorage.setItem("darkmode", "false");
    }
}