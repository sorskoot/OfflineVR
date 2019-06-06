AFRAME.registerComponent('cursor-listener', {
    init: function () {
        this.el.addEventListener('click', evt => {

            let gameObject = this.el.components['game-object'];
            if (gameObject) {
                gameObject.clicked();
            }
        });
    }
});