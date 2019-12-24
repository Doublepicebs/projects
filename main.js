let bur = document.getElementsByClassName("arc-navbar-burger");
let burger = bur[0];
console.log(burger);
let c = false;

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
  
}
function closeDrawer() {
  
}