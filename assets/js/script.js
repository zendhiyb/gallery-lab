var nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 80) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

const cursor = document.querySelector(".cursor");

let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    posX += (mouseX - posX) * 0.20;
    posY += (mouseY - posY) * 0.20;

    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px";;

    requestAnimationFrame(animate);
}

animate();