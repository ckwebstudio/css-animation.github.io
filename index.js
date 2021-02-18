let dragon = document.getElementById("dragon");
let dragonContainer = document.getElementById("dragonContainer");
dragon.addEventListener("click", () => {
    console.log("clicked on dragon");
    dragonContainer.classList.toggle("hide");
});

let tribal = document.getElementById("tribal");
let tribalContainer = document.getElementById("tribalContainer");
tribal.addEventListener("click", () => {
    console.log("clicked on tribal");
    tribalContainer.classList.toggle("hide");
});

let tree = document.getElementById("tree");
let treeContainer = document.getElementById("treeContainer");
tree.addEventListener("click", () => {
    console.log("clicked on tree");
    treeContainer.classList.toggle("hide");
});

let pigeon = document.getElementById("pigeon");
let pigeonContainer = document.getElementById("pigeonContainer");
pigeon.addEventListener("click", () => {
    console.log("clicked on pigeon");
    pigeonContainer.classList.toggle("hide");
});

let lotus = document.getElementById("lotus");
let lotusContainer = document.getElementById("lotusContainer");
lotus.addEventListener("click", () => {
    console.log("clicked on lotus");
    lotusContainer.classList.toggle("hide");
});

let death = document.getElementById("death");
let deathContainer = document.getElementById("deathContainer");
death.addEventListener("click", () => {
    console.log("clicked on death");
    deathContainer.classList.toggle("hide");
});

// to get the length of svg
let svg1 = document.querySelector("#svg8 path");
let length = svg1.getTotalLength();
console.log(length);

