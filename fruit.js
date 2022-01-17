status = "";
objects = [];

function preload() {

  img = loadImage("Fruit_Basket.jpg");

}

function setup() {

  canvas = createCanvas(420,350);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML = "Detecting objects";

}

function modelLoaded() {

  status = true;
  console.log("Model loaded");
  objectDetector.detect(img,gotResults);

}

function gotResults(error,results) {

  objects = results;

}

function draw() {

  image(img,420,350);

  if(status != "") {

    for(i=0;i<objects.length;i++) {

      percent = floor(objects[i].confidence)*100;
      text = objects[i].label;
      fill("#FF0000");
      text(text,objects[i].x-15,objects[i].y-15);
      noFill();
      stroke("#FF0000");
      rect(object[i].x,objects[i].y,objects[i].width,objects[i].height);

    }

  }

}