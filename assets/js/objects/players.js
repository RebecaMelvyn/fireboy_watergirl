
class Player extends Collider{
    constructor(x, y, type, width, height){
        super();
        this.x = x;
        this.y = y;
        this.speed= 10;
        this.boost= 1;
        this.type= type;
        this.width = 65 + "px";
        this.height = 91 + "px";
        this.element = null;
        this.gravityValue = 9;
        this.createPlayer(type);
        setInterval(function(e){

            e.gravity()
        }
        ,100, this);


    } 
    move(direction) {
        this.colide();
        if (direction === "left" && !this.isCollide.includes("left")) {
            this.x -= this.speed;
            
        }else if(direction === "right" && !this.isCollide.includes("right")){
            this.x += this.speed;
        }
        console.log(this.isCollide);
        this.element.style.left = this.x + "px";
        
    }
    gravity(){
        
        this.colide();
        if (!this.isCollide.includes("bottom")) {
            
            this.y -= this.gravityValue;
            this.element.style.bottom = this.y + "px";
        }
     
    }
    createPlayer(type){
        let player1 = document.createElement("div");
        player1.classList.add("perso");
        player1.classList.add(type);
        player1.style.left = this.x + "px";
        player1.style.bottom = this.y + "px";
        player1.style.width = this.width;
        player1.style.height = this.height;
        document.body.appendChild(player1);
        this.element = player1;
    }
}
