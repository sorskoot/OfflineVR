import * as rotationUtils from '../utils/rotation.utils';

export default AFRAME.registerComponent('laser', {
    schema: {

    },
    init: function () {
    
        this.createLaser();
    },

    //    update: function (oldData) { },
    //    tick: function (time, timeDelta) { },
    //    tock: function (time, timeDelta, camera){ },
    //    remove: function () { },
    //    pause: function () { },
    //    play: function () { },
    //    updateSchema: function(data) { }
    createLaser:function() {
        let startlaserEl = document.querySelector("[mixin=type-start-laser]")
        let startlaserComp = startlaserEl.components["game-object"].data
        this.startpos = startlaserComp.position;
        this.rotation = rotationUtils.default.toRotation(startlaserComp.rotation);

        let points = [
            new THREE.Vector3(this.startpos.x, this.startpos.y, this.startpos.z),
            new THREE.Vector3(Math.sin(this.rotation) * 25 + this.startpos.x, this.startpos.y, Math.cos(this.rotation) * 25 + this.startpos.z)
        ];
        this.material = new THREE.MeshStandardMaterial({
            color: 'green'
        });
        var tubeGeometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 32, .1, 8, false);
        this.line = new THREE.Mesh(tubeGeometry, this.material);
        this.el.setObject3D('mesh', this.line);
    },

    updateLaser:function(){
        this.el.removeObject3D('mesh');
        this.createLaser();
    }
});

