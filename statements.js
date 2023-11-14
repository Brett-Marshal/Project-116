function preload()
{
    moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup()
{
    canvas = createCanvas(450,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("poseNet Library is Initialized");
}

UlipX = 0;
UlipY = 0;

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        UlipX = results[0].pose.nose.x-111;
        UlipY = results[0].pose.nose.y-31;
        console.log("the x position of the Upper Lip is ", UlipX);
        console.log("the y position of the Upper Lip is ", UlipY);
    }
}

function draw()
{
    image(video, 0, 0, 450, 400);
    image(moustache, UlipX, UlipY, 40, 20);
}

function capture()
{
    save("filteredImage.png");
}

