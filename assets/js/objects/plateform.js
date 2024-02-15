class Plateform extends Collider{
    constructor(x, y, width, height){
        super();
        this.x = x;
        this.y = y;
        if(width == "full") this.width = "100%";
        else this.width = width + "px";

        if(height == "full") this.height = "100%";
        else this.height = height + "px";
        
        this.element = null;
        this.createPlateform();

    }
    createPlateform(){
        let plateform1 = document.createElement("div");
        plateform1.classList.add("platforme");
        plateform1.style.left = this.x + "px";
        plateform1.style.bottom = this.y + "px";
        plateform1.style.width = this.width;
        plateform1.style.height = this.height;
        document.querySelector("#level").appendChild(plateform1);
        this.element = plateform1;
    }
}