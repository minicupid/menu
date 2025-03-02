var footer = document.querySelector(".footer");
var audio = document.getElementById("crunch");
var display = true;

function hideShow() {
    if (display) {
      footer.style.display = "none";
      crunch.play();

    } else {

      footer.style.display = "block";
    }
    display = !display;
  }
