
function changebg(color) {
  document.body.style.background = color;
}
function changeimage(arg1) {
  if (arg1 == "first") {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'block';

    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
  }
  if (arg1 == "second") {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';

    document.getElementById("third").style.display = 'block';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
  }
  if (arg1 == "third") {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';

    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'block';
    document.getElementById("fifth").style.display = 'none';
  }

  if (arg1 == "fourth") {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';

    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'block';
  }

  if (arg1 == "fifth") {
    document.getElementById("first").style.display = 'block';
    document.getElementById("second").style.display = 'none';

    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
  }
}
function changecolour(x)
{
  
  x.style.color="purple";

}
function changeback(x)
{
  x.style.color="white";
}
//STICKY NAVBAR:

let navbar = document.getElementById("navbar1");

let sticky = navbar.offsetTop;
navbar.classList.add("sticky");
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
