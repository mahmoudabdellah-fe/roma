let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let roma = document.querySelector(".roma");
window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  roma.style.fontSize = value + "px";
  if (scrollY >= 67) {
    roma.style.fontSize = 67 + "px";
    roma.style.position = "fixed";
    if (scrollY >= 478) {
      roma.style.display = "none";
    } else {
      roma.style.display = "block";
    }
    if (scrollY >= 127) {
      document.querySelector(".main").style.background =
        "linear-gradient(#376281,#10001f)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(to top,#200016,transparent)";
    }
  }
};
