var canvas = document.getElementById("canvas")
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

var gl = canvas.getContext('experimental-webgl')

gl.clearColor(1,0,0,1)
gl.clear(gl.COLOR_BUFFER_BIT)
