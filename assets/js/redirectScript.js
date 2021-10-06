function digital_tour(){
    callLoader();
    setTimeout(function (){
        window.location.href = "/tijdloos/starttour.html";
    }, 4750);
}

function call_loading_screen_on_start(){
    console.log("Loading Screen init");
    callLoader("50", 0);
}

function callLoader(loadPercentage = "0", loadInOnStart = 1){
    let breakLine = document.createElement("br");

    let loader = document.createElement("div");
    if(loadInOnStart == 1) {
        loader.classList.add("loader", "animatedLoader")
    }else{
        loader.className = "loader";
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


    let loadProgressSpinnerDiv = document.createElement("div")
    loadProgressSpinnerDiv.className = "spinner-border";
    loadProgressSpinnerDiv.setAttribute("role", "status");
    let loadProgressSpinner = document.createElement("em")
    loadProgressSpinner.className = "sr-only";


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
        setInterval(function(){
            element.remove()
        }, 3000)

    }else{
        console.log("Error: Loader not found!")
    }
}

