window.onload = function () {
    initColorPicker();
};

function initColorPicker() {
    let colorBox= document.getElementById("color-box")
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue"),
    };
    setColorPickerEventListeners(colorBox, rgb);
}

function setColorPickerEventListeners(colorBox, rgb) {
    rgd.red.addEventListener('change',() => {
        console.log("Red value: ", rgb.red.value);
    });
    rgd.green.addEventListener('change',() => {
        console.log("Green value: ", rgb.green.value);
    });
    rgd.blue.addEventListener('change',() => {
        console.log("Blue value: ", rgb.blue.value);
    });
}