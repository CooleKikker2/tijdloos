var clicked = 0

function digital_tour(){
    clicked = 1;
    callLoader("./assets/img/loading_bg.png");
    setTimeout(function (){
        window.location.href = "/tijdloos/starttour.html";
    }, 4750);
}

function gallery(){
    clicked = 1;
    callLoader("./assets/img/loading_bg_2.jpeg");
    setTimeout(function (){
        window.location.href = "/tijdloos/gallery.html";
    }, 4750);
}

function call_start_tour(location, element){
    element.classList.add("selectedChoice")
    element.classList.remove("col-md-4")
    element.classList.remove("hoverBorder");
}

function call_loading_screen_on_start(img){
    callLoader(img, "50", 0);

}

function callLoader(loadImg, loadPercentage = "0", loadInOnStart = 1){
    let breakLine = document.createElement("br");

    let loader = document.createElement("div");
    if(loadInOnStart == 1) {
        loader.classList.add("loader", "animatedLoader");
        loader.style.background = "url('"+ loadImg +"') no-repeat center center fixed";
        loader.style.backgroundSize = "cover";
    }else{
        loader.classList.add("loader");
        loader.style.background = "url('"+ loadImg +"') no-repeat center center fixed";
        loader.style.backgroundSize = "cover";
    }
    loader.setAttribute("id", "loader");


    let logo = document.createElement("img");
    logo.src = "assets/img/logo.svg"
    logo.classList.add("img-fluid", "img-responsive");
    logo.style.margin = "0 auto;"


    let overlay = document.createElement("div");
    overlay.className = "overlay"

    let loaderDiv = document.createElement("div")
    loaderDiv.className = "loaderDiv";

    let loadProgressText = document.createElement("p")
    loadProgressText.setAttribute("id", "loading")


    let loadProgressSpinnerDiv = document.createElement("span")
    loadProgressSpinnerDiv.className = "spinner-border";
    loadProgressSpinnerDiv.setAttribute("role", "status");
    let loadProgressSpinner = document.createElement("span")
    loadProgressSpinner.classList.add("sr-only")


    let loadProgress = document.createElement("div")
    loadProgress.className = "progress"

    let loadProgressBar = document.createElement("div");
    if(loadInOnStart == 1) {
        loadProgressBar.classList.add("progress-bar", "bg-primary", "progress-bar-striped", "progress-bar-animated", "startLoadingBar")
    }else{
        loadProgressBar.classList.add("progress-bar", "bg-primary", "progress-bar-striped", "progress-bar-animated", "halfWayLoadingBar")
    }
    loadProgressBar.setAttribute("role", "progressbar")
    loadProgressBar.setAttribute("aria-valuemin", "0")
    loadProgressBar.setAttribute("aria-valuemax", "100")
    loadProgressBar.setAttribute("aria-valuenow", "60")
    if(loadPercentage){
        loadProgressBar.style.width = loadPercentage + "%;";
    }

    loadProgressSpinnerDiv.appendChild(loadProgressSpinner)

    loadProgress.appendChild(loadProgressBar)

    loaderDiv.appendChild(loadProgressSpinnerDiv)
    loaderDiv.appendChild(loadProgressText)

    overlay.appendChild(logo)
    overlay.appendChild(breakLine)
    overlay.appendChild(loaderDiv)
    overlay.appendChild(loadProgress)

    loader.appendChild(overlay)


    document.getElementById("main_bg").appendChild(loader);

    getString('loading');
}

function deleteLoader(){
    const element = document.getElementById("loader")
    if(element){
        element.classList.add("fadeOut");
        setTimeout(function(){
            element.remove()
        }, 2500)

    }
}

function deleteLoaderWithoutAnimation(){
    const element = document.getElementById("loader")
    if(element){
        element.remove()
    }
}



