// 0 is perpendicular, 1 is parallel
var parkingFlag = 0

loadPerpendicularImage = function(){
    var image = document.getElementById('perpendicularImage');
    if(image!=null){
        image.src="perpendicularImage.jpeg"
        parkingFlag = 0
    }
};

loadParallelImage = function(){
    var image = document.getElementById('parallelImage');
    if(image!=null){
        image.src="parallel.jpg"
        parkingFlag = 1
    }
}

listenCancelButton = function(){
    var cancelButton = document.getElementById('cancelButton')
    if(cancelButton != null){    
    }
}

playFeed = function(){
    if(parkingFlag == 0){
        playPerpendicularFeed()
    } else{
        playParallelFeed()
    }
}

playParallelFeed = function(){
    var video = document.getElementById('parkingVideo')
    if(video!=null){
        video.src = "parallelVideo.mp4";
        video.play();
    }
}

playPerpendicularFeed = function(){
    var video = document.getElementById('parkingVideo')
    if(video!=null){
        video.src = "perpendicularVideo.mp4";
        video.play();
    }
}

drawSteeringBrakeLine = function(){
    var wheel = document.getElementById("steeringWheel");
    var wheelcontext =wheel.getContext("2d")
    wheel.beginPath();
    wheel.moveTo(0,0);
    wheel.lineTo(300,150);
    wheel.stroke();
}