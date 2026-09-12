document.getElementById("hero").style.backgroundColor = "rgba(168, 19, 19, 0.5)";
document.getElementById("about").style.color = "rgba(19, 21, 168, 0.5)";
document.getElementsByClassName("cards")
document.querySelectorAll(".cards")
document.querySelector(".cards")


const test = document.getElementById("test");
test.textContent = "Salsabil Alzoubi";
test.innerHTML = "another text";
test.innerText = "third text";

const card = document.getElementById("test");
card.style.backgroundColor = "blue";

const div = document.createElement("div");
div.className = "new-div";
div.style.backgroundColor = "purple";
div.textContent = "This is a new div created using JavaScript.";

document.body.appendChild(div);

const btn = document.getElementById("button");
btn.addEventListener("click", function() {
    alert("Button clicked! This is a JavaScript alert.");
});

const form = document.getElementById("maintenance");
form.addEventListener("submit", function(e) {
    e.preventDefault();
});