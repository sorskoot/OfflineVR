import * as rotationUtils from '../utils/rotation.utils';

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
        direction: {
            default: 'N',
            oneOf: ['N', 'E', 'S', 'W'],
            schemaChange: true
        }
    },

    init: function () {
        this.el.setAttribute("position", this.data.position);
        this.el.setAttribute("mixin", `type-${this.data.type}`);
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
    update() {
        this.el.setAttribute('rotation', `0 ${rotationUtils.default.toRotationDeg(this.data.direction)} 0`);
        let laser = document.getElementById("laser").components["laser"];

        laser.updateLaser();
    },
    clicked() {
        this.data.direction = rotationUtils.default.rotate(this.data.direction);
        this.update();
    }
});