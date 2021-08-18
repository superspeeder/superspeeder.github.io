var canvas = document.getElementById("canvas")
canvas.width = document.body.width;
canvas.height = document.body.height;

var gl = canvas.getContext('experimental-webgl')

gl.clearColor(1,0,0,1)
gl.clear(gl.COLOR_BUFFER_BIT)
