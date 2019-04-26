//texturePainting.minFilter = texturePainting.magFilter = THREE.LinearFilter

export default AFRAME.registerComponent('s-pixel-material', {
    schema: {
        textureFile: {
            type: 'string'
        }

    },
    init: function () {
        let fragmentShader = document.getElementById('fragment').textContent,
             vertexShader = document.getElementById('vertex').textContent;

        new Promise(res => {
            new THREE.TextureLoader()
                .load(this.data.textureFile, txt => res(txt));
        }).then(texture => {
            // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            // texture.offset.set( 0, 0 );
            // this.material = new THREE.MeshLambertMaterial( { color: 0xffffff, map: texture } )

            this.material = new THREE.ShaderMaterial({
                uniforms: {
                  //time: { value: 0.0 },
                  texSampler: { value: texture},
                //   spriteDimensions: { value: { x: 16.0, y: 1.0 } },
                  repeat: { value: { x: 1.0, y: 1.0 } },
                //   fogStart: { value: 5 },
                //   fogEnd: { value: 15 },
                //   fogColor: { value: new THREE.Color(0, 0, 0) },
                //   tint: { value: new THREE.Color(255, 255, 255) },
                //   tintAmount: { value: 0 }
                },
                vertexShader,
                fragmentShader
              });
            
            this.applyToMesh();
        });

        // this.texture = new THREE.ImageUtils.loadTexture('./lost.png');
        // window.t.minFilter = window.t.magFilter = 1003;
        


        //this.el.addEventListener('model-loaded', () => this.applyToMesh());
    },

    applyToMesh: function () {
        const mesh = this.el.getObject3D('mesh');
        if (mesh) {
            this.material.uniforms.repeat.value.x = +this.el.getAttribute("width") || 1;
            this.material.uniforms.repeat.value.y = +this.el.getAttribute("height") || 1;
            mesh.material = this.material;
        }
    }
});