var canvas = document.getElementById("canvas")
canvas.width = document.innerWidth;
canvas.height = document.innerHeight;

var gl = canvas.getContext('experimental-webgl')

gl.clearColor(1,0,0,1)
gl.clear(gl.COLOR_BUFFER_BIT)
