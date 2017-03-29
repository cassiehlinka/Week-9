var highlighterDiv = document.getElementById('highlighter');
var imagesArray = document.querySelectorAll("div img");

imagesArray.forEach(function(d, i) {
  var image = d;
  image.addEventListener("mouseover", function(){
    var rect = this.getBoundingClientRect();
    currentIndex = i;
    updateHighlighter();
  });
});

function updateHighlighter() {
  var image = imagesArray[currentIndex];

  var rect = image.getBoundingClientRect();
  highlighter.style.opacity = 1;
  highlighter.style.width = rect.width+"px";
  highlighter.style.height = rect.height+"px";
  highlighter.style.top = rect.top+"px";
  highlighter.style.left = rect.left+"px";
}

window.addEventListener("keydown", function(e) {
  console.log(e.keyCode);

  if (e.keyCode == 37) {
    // left arrow
    currentIndex--;
  } else if (e.keyCode == 39) {
    // right arrow
    currentIndex++;
  }

  if (currentIndex >= imagesArray.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = imagesArray.length -1;
  }

  updateHighlighter();
});
