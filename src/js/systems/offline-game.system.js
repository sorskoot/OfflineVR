export default AFRAME.registerSystem('offline-game', {
    init: function () {
        this.el.setAttribute("offline-game-manager","state:init");
        this.manager = this.el.components['offline-game-manager'];
    },
});