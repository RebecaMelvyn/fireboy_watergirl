window.addEventListener("load", function(){
    initLevel(1);
    
    
});


function initLevel(level){
    if(level == 1){
        // init player
            var player1 = new Player(500, 500, "fire");
            var plateform1 = new Plateform(0, 500, 200, 80);
           var plateform2 = new Plateform(200, 170, 200, 80);
             var plateform3 = new Plateform(400, 250, 200, 80);
           //var plateformTop = new Plateform(0, 750, 200, 80);
            // var plateformWall = new Plateform(0, 0, 20, "full");
            // init Gravity
            Player.getObjects();
    }
    document.addEventListener("keydown", function(e){
        if(e.code == "KeyA"){
            player1.move("left");
        }else if(e.code == "KeyD"){
            player1.move("right");
        }
        // console.log(player1.x);
    });
}
