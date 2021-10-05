function switchLanguage(lan = null) {
    let file = "";
    let languageName = "";
    let loadedLan = lan
    console.log("Hoi:" + loadedLan)

    if(!lan){
        loadedLan = "nl";
    }



    switch (loadedLan) {
        case "nl":
            languageName = "Nederlands";
            file = "assets/js/data/langData/nl.json";
            break;
        case "en":
            languageName = "English";
            file = "assets/js/data/langData/en.json"
            localStorage.setItem("lan_key", loadedLan)
            break;
    }

    localStorage.setItem("lan_key", loadedLan)

    if(file){
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", file)
        rawFile.responseType = "json"
        rawFile.send();
        rawFile.onload = function (){
            const data = rawFile.response;
            Object.entries(data).forEach(value => {
                document.getElementById(value[0]).innerHTML = value[1];
                document.getElementById("lang-select").innerHTML = "<img width='25px' style='margin-right: 10px' src='assets/img/country/" + loadedLan + ".png'>" + languageName;
            })
        }


    }else{
        console.log("No language data found!");
    }
}

window.onload = function() {
    const localLan = localStorage.getItem("lan_key");
    switchLanguage(localLan);
}



