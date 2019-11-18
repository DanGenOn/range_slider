const slider = document.querySelector(".myRange");
const output = document.querySelector(".value");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function() {
    let x = slider.value;
    let color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '%, rgb(214,214,214)' + x + '%)';
    slider.style.background = color;
});