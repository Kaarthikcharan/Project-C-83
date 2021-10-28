var mouseEvent="empty";
canvas=document.getElementById("my_canvas");
 var ctx=canvas.getContext("2d");
 var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
if(width<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
var color=document.getElementById("color").value;
var width_of_line=document.getElementById("wi_of_li").value;
var radius=document.getElementById("radi").value;
mouseEvent="mousedown"
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave"
}
canvas.addEventListener("touchstart",my_touchstart)
function my_touchstart(){
    lastposition_of_x=current_position_of_touch_x;
    lastposition_of_y=current_position_of_touch_y;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
var current_position_of_touch_x=e.touches[0].clientX=canvas.offsetLeft;
var current_position_of_touch_y=e.touches[0].clientY=canvas.offsetTop;


ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("last position of x and y");
console.log("x="+lastposition_of_x+"y="+lastposition_of_y);
ctx.moveTo(lastposition_of_x,lastposition_of_y);
console.log("current position of x and y");
console.log("x="+current_position_of_touch_x+"y="+current_position_of_touch_y);
ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
ctx.stroke();
}


lastposition_of_x=current_position_of_touch_x;
lastposition_of_y=current_position_of_touch_y;
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
var current_position_of_mouse_x=e.clientX=canvas.offsetLeft;
var current_position_of_mouse_y=e.clientY=canvas.offsetTop;
if(mouseEvent==mousedown){

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("last position of x and y");
console.log("x="+lastposition_of_x+"y="+lastposition_of_y);
ctx.moveTo(lastposition_of_x,lastposition_of_y);
console.log("current position of x and y");
console.log("x="+current_position_of_touch_x+"y="+current_position_of_touch_y);
ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
ctx.stroke();
}


lastposition_of_x=current_position_of_mouse_x;
lastposition_of_y=current_position_of_mouse_y;
}