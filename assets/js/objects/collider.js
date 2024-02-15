class Collider {
    static objects = [];
    constructor(){
        this.isCollide = []; 

        Collider.setObjects(this);
    }
    static setObjects(obj){
        Collider.objects.push(obj);
    }
    static getObjects() {
        console.log(Collider.objects);
    }
    colide(){

        this.isCollide = [];
        var persoBasGauche = {"x":this.x, "y":this.y}
        var persoHautGauche =  {"x":this.x, "y":this.y + parseInt(this.height.replace("px", ""))}
        var persoBasDroite =  {"x":this.x + parseInt(this.width.replace("px", "")), "y":this.y}
        var persoHautDroite = {
            "x":this.x + parseInt(this.width.replace("px", "")), "y":this.y + parseInt(this.height.replace("px", ""))
         }

        Collider.objects.forEach(obj => {
            if (this!=obj) {

                var objBasGauche = {"x":obj.x, "y":obj.y}
                var objHautGauche =  {"x":obj.x, "y":obj.y + parseInt(obj.height.replace("px", ""))}
                var objBasDroite =  {"x":obj.x + parseInt(obj.width.replace("px", "")), "y":obj.y}
                var objHautDroite = {"x":obj.x + parseInt(obj.width.replace("px", "")), "y":obj.y + parseInt(obj.height.replace("px", ""))}

                // collision vers le bas
                if (
                    !(
                        (persoBasGauche.y - this.gravityValue >= objHautGauche.y)
                         ||
                         (
                             (persoBasDroite.x < objBasGauche.x)
                             ||
                             (persoBasGauche.x > objBasDroite.x)
                         )
                       || 
                         (persoBasGauche.y - this.gravityValue >= objHautGauche.y - 3)
                    )
                ) 
                {   
                    this.isCollide.push("bottom");
                    if(persoBasGauche.y  < objHautGauche.y - 3){
                        this.isCollide.shift("bottom");
                    }
                }

                // collision vers la gauche
                if 
                // (
                //     (
                //         persoHautGauche.x > objHautGauche.x &&
                //         persoHautGauche.x - this.speed < objHautDroite.x 
                //     )
                //     &&
                //     (
                //         (
                //             persoHautGauche.y > objBasGauche.y  &&  
                //             persoHautGauche.y < objHautGauche.y

                //         ) ||
                //         (
                //             persoBasGauche.y  >= objBasGauche.y  &&  
                //             persoBasGauche.y  < objHautGauche.y
                //         )
                //     )
                // )
                (
                    !(
                        (persoBasGauche.x - this.speed >= objBasDroite.x)
                        ||
                         (
                             (persoBasGauche.y > objHautDroite.y)
                            ||
                             (persoHautGauche.y < objBasDroite.y)
                         )
                         ||
                         (persoHautGauche.x - this.speed >= objHautDroite.x)
                    )
                )
                {
                    this.isCollide.push("left");
                }

                return;
                // collision vers la droite
                if (
                    (
                        
                        persoBasDroite.x + this.speed > objBasGauche.x &&
                        persoBasDroite.x  < objBasDroite.x
                    )
                    &&
                    (
                        (
                            persoHautDroite.y > objBasDroite.y  &&  
                            persoHautDroite.y < objHautDroite.y

                        ) ||
                        (
                            persoBasDroite.y  >= objBasDroite.y  &&  
                            persoBasDroite.y  < objHautDroite.y
                        )
                    )
                )
                {
                    this.isCollide.push("right");
                }

                return;

                // collision vers le haut
                if (
                    (
                        
                        persoHautGauche.y < objHautGauche.y &&
                        persoHautGauche.y > objBasGauche.y - this.gravityValue
                    )
                    &&
                    (
                        (
                            persoHautDroite.x > objHautGauche.x  &&  
                            persoHautDroite.x < objHautDroite.x

                        ) ||
                        (
                            persoHautGauche.x  > objHautGauche.x  &&  
                            persoHautGauche.x  < objHautDroite.x
                        )
                    )

                )
                {
                    this.isCollide.push("top");
                }


               

                // collision sur le côté de l'écran
                // if (this.x <= 0) {
                //     this.isCollideLeft = true;
                // }else{
                //     this.isCollideLeft = false;
                // }
            }
    
        });
    }
}