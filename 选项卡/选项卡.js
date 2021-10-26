window.onload = function a() {
  var li = document.querySelectorAll("li");
  var div = document.querySelectorAll(".i");
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("mouseover", function () {
      li[i].className = "active";
      div[i].className = "i active";
      for (let j = 0; j < li.length; j++) {
        if (j != i) {
          li[j].className = "";
          div[j].className = "i";
        }
      }
    });
  }
};
