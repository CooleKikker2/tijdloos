setInterval(function(){
    if(document.getElementById("nextButton").clicked == undefined && clicked == 0) {
        deleteLoaderWithoutAnimation()
    }else{
        console.log("Button Clicked!")
        clicked = 1
    }
}, 1000)

window.addEventListener('beforeunload', function(){
    clicked = 0;
})

window.addEventListener('DOMContentLoaded', function(){
    if(clicked == 0) {
        deleteLoaderWithoutAnimation()
    }
})