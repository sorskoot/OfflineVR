
const puzzles = [[{type:'start-laser',
  pos:[2.0, 0.5, 3.0],
  rot:'N'},
  {type:'mirror',pos:[-2.0, 0.5, -2.0],rot:'N',},
  {type:'end-laser',pos:[-2.0, 0.5, 3.0],rot:'S',},
  {type:'wall',pos:[0.0, 0.5, 3.0],rot:'W',},
  {type:'mirror',pos:[2.0, 0.5, -2.0],rot:'N'},],
  [{type:'start-laser',pos:[-3.0, 0.5, 5.0],rot:'N',},
  {type:'end-laser',pos:[3.0, 0.5, 5.0],rot:'N',},
  {type:'mirror',pos:[-3.0, 0.5, -1.0],rot:'N',},
  {type:'mirror',pos:[3.0, 0.5, -1.0],rot:'N',},  
  {type:'wall',pos:[0.0, 0.5, 4.0],rot:'N',},
  {type:'wall',pos:[0.0, 0.5, 3.0],rot:'N',},
  {type:'wall',pos:[-2.0, 0.5, 3.0],rot:'N',},
  {type:'wall',pos:[-1.0, 0.5, 3.0],rot:'N',},
  {type:'wall',pos:[-4.0, 0.5, 3.0],rot:'N',},
  {type:'wall',pos:[0.0, 1.5, 5.0],rot:'N',},
  {type:'wall',pos:[0.0, 1.5, 4.0],rot:'N',},
  {type:'wall',pos:[0.0, 1.5, 3.0],rot:'N',},
  {type:'wall',pos:[-2.0, 1.5, 3.0],rot:'N',},
  {type:'wall',pos:[-1.0, 1.5, 3.0],rot:'N',},
  {type:'wall',pos:[-3.0, 1.5, 3.0],rot:'N',},
  {type:'wall',pos:[-4.0, 1.5, 3.0],rot:'N',},
  {type:'wall',pos:[-1.0, 0.5, 2.0],rot:'N',},
  {type:'wall',pos:[-1.0, 0.5, 0.0],rot:'N',},
  {type:'wall',pos:[-1.0, 0.5, -2.0],rot:'N',},
  {type:'wall',pos:[-1.0, 1.5, 0.0],rot:'N',},
  {type:'wall',pos:[-1.0, 1.5, -1.0],rot:'N',},
  {type:'wall',pos:[-1.0, 1.5, -2.0],rot:'N',},
  {type:'wall',pos:[-1.0, 1.5, 2.0],rot:'N',},
  {type:'wall',pos:[-1.0, 2.5, 2.0],rot:'N',},
  {type:'wall',pos:[-1.0, 2.5, 1.0],rot:'N',},
  {type:'wall',pos:[-1.0, 2.5, 0.0],rot:'N',},
  {type:'wall',pos:[-1.0, 2.5, -1.0],rot:'N',},
  {type:'wall',pos:[-1.0, 2.5, -2.0],rot:'N',},]
]

export default AFRAME.registerComponent('s-puzzle', {
   init: function () { 
    const puzzleIndex = 1;

    const puzzleGroup = document.querySelector("#puzzle-group");
    for (let i = 0; i < puzzles[puzzleIndex].length; i++) {
        const obj = puzzles[puzzleIndex][i];
        const ent = document.createElement("a-entity");
        let gameObject = [];

        gameObject.push(`position:${obj.pos[0]} ${obj.pos[1]} ${obj.pos[2]}`);
        gameObject.push(`rotation:${obj.rot}`);
        gameObject.push(`type:${obj.type}`);

        ent.setAttribute("s-game-object",gameObject.join('; '));

        puzzleGroup.appendChild(ent);
    }

   },
  
});