var InitDemo = function() {
    console.log('This is working');

    var canvas = document.getElementById('game-surface');
    var gl = canvas.getContext('webgl');

    if ((!gl)) {
        console.log('WebGL not supported, falling back on experimental WebGL')
        gl = canvas.getContext('experimental-webgl');
    }
    
    if (!gl) {
        alert('Your browser does not support WebGL');
    }

    gl.clearColor(0.75, 0.85, 0.8, 1.0); // R, G, B, Opaque Values
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
};

function vertexShader(vertPosition, vertColor) {
    return {
        fragColor: vertColor,
        gl_position: [vertPosition.x, vertPosition.y, 0.0, 1.0]
    };
}