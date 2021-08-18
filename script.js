var canvas = document.getElementById("canvas");
var gl = canvas.getContext('experimental-webgl');

gl.clearColor(1,0,0,1);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.begin(gl.TRIANGLES);
gl.color4f(0.0,1.0,1.0,1.0);
gl.vertex2f(0.0,0.0);
gl.vertex2f(1.0,0.0);
gl.vertex2f(0.0,1.0);
gl.end(gl.TRIANGLES)

log("Done Drawing")