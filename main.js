var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition;

function start(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult=function run(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie"){
    console.log("taking selfie-----");
    speak();
    }

}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking Selfie In Five Seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot();
        save();
    },5000);
}

Webcam.set({
width:320,
height:240,
image_format:"png",
png_quality:90
});
camera = document.getElementById("camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("output").innerHTML = "<img id='image' src='"+data_uri+"'>";
    })
}

function save(){
    link = document.getElementById("link");
    img = document.getElementById("image").src;
    link.href=img;
    link.click();
}