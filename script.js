// JavaScript to change the background color when the button is clicked
document.getElementById("change-color-btn").addEventListener("click", function() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFD700", "#FF33A1"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
