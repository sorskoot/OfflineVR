const ROT = {
    'N': 0,
    'E': Math.PI * 0.5,
    'S': Math.PI,
    'W': Math.PI * 1.5,
};

let rotationUtils = {
    toRotation: function (rot) {
        if (ROT.hasOwnProperty(rot)) {
            return ROT[rot];
        }
        console.warn(`toRotation called with unknown value('${rot}').`);
        return 0;
    }
}

export default rotationUtils;
