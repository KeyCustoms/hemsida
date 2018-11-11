function remove() {
  document.getElementById("addKey-cover").style.display = "none";
  document.getElementById("item-frame").style.display = "block";
  document.getElementById("newKey-button").style.display = "inline-block";
}

function addItem(){
  document.getElementById("items").contentDocument.write("fred rules");
  //document.getElementById("items").innerHTML = '<div class="item"></div>';
}
