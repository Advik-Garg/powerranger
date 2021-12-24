var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg",function(Ing){
block_object=Ing
block_object.scaleToWidth(1000)
block_object.scaleToHeight(600) 
block_object.set({
    top:0,
    left:0
})
canvas.add(block_object)
})	
	
}

function play(){
x.play()	
}
