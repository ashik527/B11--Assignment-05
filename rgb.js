window.onload = () => {
    mainRgb();
}
function mainRgb(){
    const body = document.getElementById('rgb-body');
    const btn = document.getElementById('rgb-btn');

    btn.addEventListener('click', function(){
        const bgColor = rgbColor()
        body.style.backgroundColor = bgColor;
    })
}
// random color generator
function rgbColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`
}
