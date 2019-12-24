/*
Make as aroma js?
*/



let bur = document.getElementsByClassName("arc-navbar-burger");
let burger = bur[0];
let dra = document.getElementsByClassName("arc-drawer");
let drawer = dra[0];
let bas = document.getElementsByClassName("arc-basic");
let basic = bas[0];

console.log(burger);
console.log(drawer);
console.log(basic);

var c = false;


drawer.style.display = "none";
drawer.style.opacity = "0%";

function arcBurgerClicker() {
  if (c === false) {
    openDrawer();
    c = true;
    console.log(c);
  } else if (c === true) {
    closeDrawer();
    c = false;
    console.log(c);
  }
}

function openDrawer() {
  basic.style.display = "none";
  drawer.style.display = "block";
  drawer.style.opacity = "100%";
  burger.text = "Х";
  console.log(basic.style.display);
  console.log(drawer.style.display);
}

function closeDrawer() {
  basic.style.display = "block";
  drawer.style.opacity = "0%";
  drawer.style.display = "none";
  burger.text = "=";
  console.log(basic.style.display);
  console.log(drawer.style.display);
}