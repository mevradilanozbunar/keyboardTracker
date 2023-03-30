const key = document.querySelectorAll(".key");
const lClick = document.querySelector(".l-click");
const rClick = document.querySelector(".r-click");

document.addEventListener(`keydown`, klavyebas);
document.addEventListener(`keyup`,klavyecek);
document.addEventListener(`mousedown`,farebas);
document.addEventListener(`mouseup`,farecek);
document.addEventListener(`contextmenu`,faresagtus);

function klavyebas(e) {
    console.log(e);
    for (let i = 0; i < key.length; i++) {
        if (e.keyCode == key[i].getAttribute('key-code')) {
            key[i].style.background = "rgba(255,255,255,0.85)";}}}
function klavyecek(e) {
    for (let i = 0; i < key.length; i++) {
    key[i].style.background = "transparent";}}
function farebas(e) {
   e=e || window.event;
   switch(e.which){
    case 1: lClick.style.background="rgba(255,255,255,0.85)";
    break
    case 3: rClick.style.background="rgba(255,255,255,0.85)";
    break}}
function farecek(e) {
    lClick.style.background="transparent";
    rClick.style.background="transparent";}

function faresagtus(e) {
    e.preventDefault();
    return false;}