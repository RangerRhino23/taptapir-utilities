//slider.js Taptapir Utilities by RangerRhino23

// How To Use

// Setup: Before <script src="taptapir.js">, put <script src="taptapir-utilities/slider.js"></script>

// Usage: In <script src="slider.js">, put var = new Slider(scale=[0.6,0.5],value=100,x=0,y=0)

// How to get value: print(var.value)

// Change Slider: var.setValue(value=100)

class Slider extends Entity{
    constructor({scale=[.45,.05],value=10,x=0,y=0}) {
        super(function update(){});
        this.alpha = 0;
        this.sliderBackground = new Entity({scale:[scale[0]+scale[1],scale[1]],x:x,y:y,roundness:0.5});
        this.sliderVal = new Entity({scale:[scale[0],0],x:x,y:y})
        this.sliderButton = new Button({scale:[scale[1],scale[1]],x:x,y:y,roundness:0.5,color:color.blue,draggable:true,lock_y:true});
        this.value = value;
        this.sliderButton.x = (this.sliderButton.x = this.value * this.sliderVal.scale_x / 100 - this.sliderVal.scale_x / 2);
        }
    update = function() {
        if (this.sliderButton.x <= (-this.sliderVal.scale_x/2+0)) {
            this.sliderButton.x = -this.sliderVal.scale_x/2+0;
        }
        if (this.sliderButton.x >= (this.sliderVal.scale_x/2-0)) {
            this.sliderButton.x = this.sliderVal.scale_x/2-0;
        }
        this.value = round((this.sliderButton.x + this.sliderVal.scale_x/2) * 100 / this.sliderVal.scale_x, 0);
    setValue = function(value=100) {
        this.sliderButton.x = (this.sliderButton.x = value * this.sliderVal.scale_x / 100 - this.sliderVal.scale_x / 2);
    }
    }
}