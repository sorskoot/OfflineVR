export default AFRAME.registerComponent('game-object', {
    schema: {
        type: {
            oneOf: ['start-laser', 'end-laser', 'mirror', 'wall'],
            schemaChange: true,
            default: 'wall'
        },
        position: {
            type: 'vec3'
        },
        rotation: {
            default: 'N',
            oneOf: ['N', 'E', 'S', 'W'],
            schemaChange: true
        }
    },

    init: function () {
        this.el.setAttribute("position", this.data.position);
        this.el.setAttribute("mixin",`type-${this.data.type}`);
        // switch (this.data.type.toLowerCase()) {
        //     case "start-laser":
                
        //         break;
        //     case "end-laser":
        //         break;
        //     case "mirror":
        //         break;
        //     case "wall":
        //         break;
        // };
    },
    update(){
        let laser = document.getElementById("laser").components["laser"];
        laser.updateLaser();
    }
});