loadPerpendicularImage = function(){
    var image = document.getElementById('perpendicularImage');
    if(image!=null){
        image.src="welcome-to-javascript-where-the-objects-are-made-up-and-13411868.png"
    }
};

loadParallelImage = function(){
    var image = document.getElementById('parallelImage');
    if(image!=null){
        image.src="welcome-to-javascript-where-the-objects-are-made-up-and-13411868.png"
    }
}

listenExitButton = function(){
    var exitButton = document.getElementById('exitButton');
    if(exitButton!=null){
        exitButton.addEventListener('click', window.close())
    }
}

listenCancelButton = function(){
    var cancelButton = document.getElementById('cancelButton')
    if(cancelButton != null){
        
    }
}

playRearCameraFeed = function(){

}

playFrontCameraFeed = function(){
    
}