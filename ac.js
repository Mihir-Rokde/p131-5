img="";
status="";
objects=[];
function preload(){
    img=loadImage("ac.jpg");
}
function setup(){
canvas=createCanvas(640,420);
canvas.position(275,300);
ObjectDetector=ml5.objectDetector('cocossd',modelloaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function modelloaded(){
    console.log("modelloaded");
    status=true;
    ObjectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
    
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
for(i=0;i<objects.length;i++)
{
    document.getElementById("status").innerHTML="status: object detected";
    document.getElementById("num").innerHTML="number of objects recognized are  "+ objects.length;
    fill("blue");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y+20);
    noFill();
    stroke("blue");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
    }
}
