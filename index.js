
function changeBackgroundColor() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
}


function changeImage() {
    const image = document.getElementById('image1');
    image.src = image.src.includes('MediaMedia/photo_2024-09-12_02-51-51.jpg') ? 'Media/Jon_snow' : 'MediaMedia/photo_2024-09-12_02-51-51.jpg';
}


function changeHeadingText() {
    const heading = document.getElementById('heading1');
    heading.innerText = 
        heading.innerText === "Welcome to My Website!" ? "You've Clicked the Button!" : "Welcome to My Website!";
}


document.getElementById('actionBtn1').addEventListener('click', function() {
    changeBackgroundColor();
    changeImage();
    changeHeadingText();
});
