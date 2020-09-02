function showContent(id){
  console.log("Here");
  var expandible = document.getElementById(id);
  var container = document.getElementById("intro-container");
  
  if (expandible.style.display === "none" || expandible.style.display === '') {
    console.log("Here");
    expandible.style.display = "block";
    container.style.paddingBottom = "11%";
  } 
  else {
    console.log("Here but different");
    expandible.style.display = "none";
  } 
}