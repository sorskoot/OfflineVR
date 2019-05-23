
const puzzles = [
    [{ type: 'start-laser', pos: [4.0, 0, 0.0], rot: 'N', },
    { type: 'end-laser', pos: [-4.0, 0, 0.0], rot: 'S', },],

    [
        { type: 'start-laser', pos: [2.0, 0, 3.0], rot: 'N' },
        { type: 'mirror', pos: [-2.0, 0, -2.0], rot: 'N', },
        { type: 'end-laser', pos: [-2.0, 0, 3.0], rot: 'S', },
        { type: 'wall', pos: [0.0, 0, 3.0], rot: 'W', },
        { type: 'mirror', pos: [2.0, 0, -2.0], rot: 'N' },],
    [{ type: 'start-laser', pos: [-3.0, 0, 5.0], rot: 'N', },
    { type: 'end-laser', pos: [3.0, 0, 5.0], rot: 'N', },
    { type: 'mirror', pos: [-3.0, 0, -1.0], rot: 'N', },
    { type: 'mirror', pos: [3.0, 0, -1.0], rot: 'N', },
    { type: 'wall', pos: [0.0, 0, 4.0], rot: 'N', },
    { type: 'wall', pos: [0.0, 0, 3.0], rot: 'N', },
    { type: 'wall', pos: [-2.0, 0, 3.0], rot: 'N', },
    { type: 'wall', pos: [-1.0, 0, 3.0], rot: 'N', },
    { type: 'wall', pos: [-4.0, 0, 3.0], rot: 'N', },
    { type: 'wall', pos: [0.0, 1, 5.0], rot: 'N', },
    { type: 'wall', pos: [0.0, 1, 4.0], rot: 'N', },
    { type: 'wall', pos: [0.0, 1, 3.0], rot: 'N', },
    { type: 'wall', pos: [-2.0, 1, 3.0], rot: 'N', },
    { type: 'wall', pos: [-1.0, 1, 3.0], rot: 'N', },
    { type: 'wall', pos: [-3.0, 1, 3.0], rot: 'N', },
    { type: 'wall', pos: [-4.0, 1, 3.0], rot: 'N', },
    { type: 'wall', pos: [-1.0, 0, 2.0], rot: 'N', },
    { type: 'wall', pos: [-1.0, 0, 0.0], rot: 'N', },
    { type: 'wall', pos: [-1.0, 0, -2.0], rot: 'N', },
    { type: 'wall', pos: [-1.0, 1, 0.0], rot: 'N', },
    { type: 'wall', pos: [-1.0, 1, -1.0], rot: 'N', },
    { type: 'wall', pos: [-1.0, 1, -2.0], rot: 'N', },
    { type: 'wall', pos: [-1.0, 1, 2.0], rot: 'N', },
    { type: 'wall', pos: [-1.0, 2, 2.0], rot: 'N', },
    { type: 'wall', pos: [-1.0, 2, 1.0], rot: 'N', },
    { type: 'wall', pos: [-1.0, 2, 0.0], rot: 'N', },
    { type: 'wall', pos: [-1.0, 2, -1.0], rot: 'N', },
    { type: 'wall', pos: [-1.0, 2, -2.0], rot: 'N', },]
]

export default AFRAME.registerComponent('puzzle', {
    schema: {
        index: {
            default: 0
        }
    },
    init: function () {
        
        let cheat = window.location.href.split('#')[1];
        const puzzleIndex = cheat || this.data.index;;
        
        const puzzleGroup = document.querySelector('#puzzle-group');
        for (let i = 0; i < puzzles[puzzleIndex].length; i++) {
            const obj = puzzles[puzzleIndex][i];
            const ent = document.createElement('a-entity');
            let gameObject = [];

            gameObject.push(`position:${obj.pos[0]} ${obj.pos[1]} ${obj.pos[2]}`);
            gameObject.push(`rotation:${obj.rot}`);
            gameObject.push(`type:${obj.type}`);

            ent.setAttribute('game-object', gameObject.join('; '));

            puzzleGroup.appendChild(ent);
        }

        this.el.sceneEl.setAttribute('offline-game-manager', 'state:running');
    },

});