 var noseX = 0;
 var noseY = 0;
 var leftWristX = 0;
 var rightWristX = 0;
 var difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size (550, 500);
    canvas = createCanvas (550, 500);
    canvas.position(560, 150);
    poseNet = 
    ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 function draw(){
    background("pink");
    document.getElementById("square_side").innerHTML = "The size of square is"+difference+"px";
    fill("#0014a8");
    stroke("#000000");
    square(noseX, noseY, difference);
 }
 function modelLoaded(){
    console.log('Posenet Initialized');
 }
 function gotPoses(results){
    if(results.length > 0){
        console.log (results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X =" + noseX + " Nose Y= " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX + " Difference =" + difference); 
    }
 }