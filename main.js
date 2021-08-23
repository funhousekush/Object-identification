img = "";

function preload()
{
    img = loadImage("dog_cat.jpg");
}

function setup()
{
    Canvas = createCanvas(640, 500);
    Canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 500);
    fill("red");
    text("Dog", 100, 100);
    noFill();
    stroke("#FF0000");
    rect(75, 75, 250, 400);

    fill("red");
    text("Cat", 325, 125);
    noFill();
    stroke("#FF0000");
    rect(300, 100, 250, 400);
}