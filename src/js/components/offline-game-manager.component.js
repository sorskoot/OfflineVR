AFRAME.registerComponent('offline-game-manager', {
    schema: {
        state: {
            oneOf: ['init', 'running'],
            schemaChange: true,
            default: 'init'
        }
    },


    update: function () {
        switch (this.data.state) {
            case 'init': this.initScene(); break;
            case 'running': this.runningScene(); break;
        }
    },

    initScene: function () {
        this.el.setAttribute("puzzle", "index:0");
    },
    runningScene: function () {
        let laser = document.createElement("a-entity");
        laser.setAttribute("id","laser");
        laser.setAttribute("laser", "");
        this.el.appendChild(laser);     
    }
});