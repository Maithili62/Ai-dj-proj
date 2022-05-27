song = "";
function preload()
{
   song = loadSound("dosti_rrr.mp3");
   song1 = loadSound("naacho_rrr.mp3");
}

function setup()
{
    canvas = createCanvas(600 , 600);
    canvas.position(650 , 270);

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video , 0 , 0 , 600 , 600);
}

