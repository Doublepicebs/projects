var texto = document.getElementById("texto");

function findType() {
  
  var type = prompt("What is the solution type?");
  
  if (type == "acid") {
    
    texto.innerText = "";
    texto.style.color = "#414141";
    
  } else if (type == "base") {
    
    texto.innerText = "";
    texto.style.color = "#414141";
    
  } else if (type == "nutral") {
    
    texto.innerText = "";
    texto.style.color = "#414141";
    
  } else {
    texto.innerText = "undefined";
    texto.style.color = "red";
  }
}