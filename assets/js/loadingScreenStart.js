function call_prev_loading_screen(img){
    call_loading_screen_on_start(img)
    setTimeout(function(){
        deleteLoader();
    }, 2700)
}