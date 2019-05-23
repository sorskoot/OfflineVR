export default AFRAME.registerComponent('repeat-entity', {
    schema: {
        repeatX:{
            default:5
        },
        repeatY:{
            default:5
        },
        mixin:{
            type:"string"
        }
    },
    init: function () { 
        for (let i = 0; i < this.data.repeatX; i++) {
            for (let j = 0; j < this.data.repeatY; j++) {
                let obj = document.createElement("a-entity");
                obj.setAttribute("mixin",this.data.mixin);
                obj.setAttribute("position",`${i - this.data.repeatX/2.0} 0 ${j - this.data.repeatY/2.0}`)
                this.el.appendChild(obj);
            }
        }
    },

});