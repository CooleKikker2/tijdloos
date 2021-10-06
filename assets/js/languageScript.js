let loadedLan = "";

function switchLanguage(lan = null) {
    let file = "";
    let languageName = "";
    let loadedLan = lan

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
                let key = value[0]
                let stringValue = value[1];
                let element = document.getElementById(key)
                if(element) {
                    element.innerText = stringValue;
                }else{
                    console.log("Element met ID: " + key + " niet gevonden!")
                }
                document.getElementById("lang-select").innerHTML = "<img width='25px' style='margin-right: 10px' src='assets/img/country/" + loadedLan + ".png'>" + languageName;
            })
        }


    }else{
        console.log("No language data found!");
    }
}

function getString(id){
    console.log("function get executed!");
    let file = "assets/js/data/langData/" +  localStorage.getItem("lan_key") + ".json";
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file)
    rawFile.responseType = "json"
    rawFile.send();
    rawFile.onload = function () {
        const data = rawFile.response;
        console.log(data);
        let element = document.getElementById(id);
        if(element) {
            element.innerText = data[id];
        }else{
            console.log("Element met ID: " + id + " niet gevonden!")
        }
    }
}

window.addEventListener('DOMContentLoaded', function (){
    const localLan = localStorage.getItem("lan_key");
    switchLanguage(localLan);
})



