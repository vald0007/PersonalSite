function showContent(id){
  var expandible = document.getElementById(id);
  var container = document.getElementById("intro-container");
  
  if (expandible.style.display === "none" || expandible.style.display === '') {
    expandible.style.display = "block";
    container.style.paddingBottom = "22%";

  } 
  else {
    expandible.style.display = "none";
  } 
}