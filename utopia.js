const url = new URL(window.location);
loading = false
function onLoad(){
    if(url.searchParams.get("utopia") == null){
        url.searchParams.set("utopia", "true")
        history.replaceState(null, "", url);
        // loading = true
        setUtopiaTheme()
    } else if (url.searchParams.get("utopia") == "false"){
        setDystopiaTheme()
        // loading = true
    } else if (url.searchParams.get("utopia") == "true"){
        setUtopiaTheme()
    }
}

function toggleButton(){
    checkbox = document.getElementById("flexSwitchCheck").checked
    if(checkbox == true){
        if(url.searchParams.get("utopia") == "false"){
            url.searchParams.set("utopia", "true")
            history.replaceState(null, "", url);
        }
        setUtopiaTheme()
    } else {
        if(url.searchParams.get("utopia") == "true"){
            url.searchParams.set("utopia", "false")
            history.replaceState(null, "", url);
        }
         setDystopiaTheme()
    }
}

function setUtopiaTheme(){
    document.body.style.display = "block"
    document.getElementById("dystopiaHeader").style.display = "none"
    document.getElementById("utopiaHeader").style.display = "block"
    document.getElementById("dystopiaNews").style.display = "none"
    document.getElementById("utopiaNews").style.display = "block"
    document.body.style.backgroundColor = "#ffffff"
    document.getElementById("navBar").style.backgroundColor = "#ffffff"
    document.getElementById("navBar").style.setProperty("background-color", "#ffffff", "important")
    const navbarTextElements = document.querySelectorAll('.nav-link');
    navbarTextElements.forEach(element => {
        element.style.color = "black"; 
    });
    document.querySelector(".form-switch .form-check-input").style.backgroundColor = "#3b71ca";
    document.querySelectorAll("hr").forEach(element => {
        element.style.backgroundColor = "";
        element.style.border = ""; 
        element.style.height = ""; 
    });
}

function setDystopiaTheme(){
    const checkbox = document.getElementById("flexSwitchCheck");
    if (checkbox.checked) {
      checkbox.checked = false; 
    }
    document.body.style.display = "block"
    document.getElementById("navBar").style.backgroundColor = "rgb(30,30,30)"
    document.getElementById("navBar").style.setProperty("background-color", "rgb(30,30,30)", "important")
    document.getElementById("dystopiaHeader").style.display = "block"
    document.getElementById("utopiaHeader").style.display = "none"
    document.getElementById("dystopiaNews").style.display = "block"
    document.getElementById("utopiaNews").style.display = "none"
    document.body.style.backgroundColor = "rgb(30, 30, 30)"
    const navbarTextElements = document.querySelectorAll('.nav-link');
    navbarTextElements.forEach(element => {
        element.style.color = "#8d1a00"; 
    });
    document.querySelector(".form-switch .form-check-input").style.backgroundColor = "#8d1a00";
    document.querySelectorAll("hr").forEach(element => {
        element.style.backgroundColor = "#8d1a00";
        element.style.border = "none"; 
        element.style.height = "1px"; 
    });
    
}

function navigateWithParams(newPage) {
    const params = new URLSearchParams(window.location.search);
    const newUrl = params.toString() ? `${newPage}?${params.toString()}` : newPage;
    window.location.href = newUrl;
  }
  

onLoad()