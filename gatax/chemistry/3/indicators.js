function findType() {
  var type = string(prompt("What is the solution type?"));
  if (type == "acid") {
    alert("");
  } else if (type == "base") {
    alert("");
  } else if (type === "") {
    alert("Please enter type");
  }
}