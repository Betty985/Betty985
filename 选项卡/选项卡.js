window.onload = function () {
  var li = document.querySelectorAll("li");
  var div = document.querySelectorAll(".i");
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("mouseover", () => {
      li[i].style.background = "#FFFFCC";
    });
    li[i].addEventListener("click", function(){
      li[i].class = "active";
      div[i].class = "active";
      for (let j = 0; j < li.length && j != i; j++) {
        li[j].class = "";
        div[j].class = "";
      }
    });
  }
};
