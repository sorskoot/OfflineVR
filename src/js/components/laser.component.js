import * as rotationUtils from '../utils/rotation.utils';

//import Laser from '../lib/threex.laser';

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
    createLaser: function () {

        var object3d = new THREE.Object3D()
        this.object3d = object3d
        // generate the texture
        var canvas = generateLaserBodyCanvas()
        var texture = new THREE.Texture(canvas)
        texture.needsUpdate = true;
        // do the material	
        this.material = new THREE.MeshBasicMaterial({
            map: texture,
            blending: THREE.AdditiveBlending,
            color: 0x4444aa,
            side: THREE.DoubleSide,
            depthWrite: false,
            transparent: true
        })

        let startlaserEl = document.querySelector("[mixin=type-start-laser]")
        let startlaserComp = startlaserEl.components["game-object"].data
        this.startpos = startlaserComp.position;
        this.rotation = rotationUtils.default.toRotation(startlaserComp.rotation);

        let points = [
            new THREE.Vector3(this.startpos.x, this.startpos.y + 0.59375, this.startpos.z),
            new THREE.Vector3(Math.sin(this.rotation) * 25 + this.startpos.x, this.startpos.y, Math.cos(this.rotation) * 25 + this.startpos.z)
        ];

        var geometry = new THREE.PlaneGeometry(1, 0.3)
        var nPlanes = 16;
        for (var i = 0; i < nPlanes; i++) {
            var mesh = new THREE.Mesh(geometry, this.material)
            mesh.position.x = 1 / 2;
            mesh.rotation.x = i / nPlanes * Math.PI
            object3d.add(mesh)
        }

        this.el.setAttribute('position', `${this.startpos.x} ${this.startpos.y + 0.59375} ${this.startpos.z}`);
        this.el.setAttribute('rotation', `0 ${(this.rotation / Math.PI * 180) - 90} 0`);
        this.el.setAttribute('scale', `${points[0].distanceTo(points[1])} 1 1`);
        this.el.setObject3D('laser', object3d);
    },

    updateLaser: function () {
        this.el.removeObject3D('laser');
        this.createLaser();
    }
});

function generateLaserBodyCanvas() {
    // init canvas
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = 1;
    canvas.height = 64;
    // set gradient
    var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(  0,  0,  0,0.1)');
    gradient.addColorStop(0.1, 'rgba(0,160,0,0.3)');
    gradient.addColorStop(0.5, 'rgba(255,255,255,0.5)');
    gradient.addColorStop(0.9, 'rgba(0,160,0,0.3)');
    gradient.addColorStop(1.0, 'rgba(  0,  0,  0,0.1)');
    // fill the rectangle
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    // return the just built canvas 
    return canvas;
}