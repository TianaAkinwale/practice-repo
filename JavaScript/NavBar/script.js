/* Toggle between adding and removing the
 "responsive" class to topnav when the user
  clicks on the icon */
const toggle = document.getElementById('icon');

function togg() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

toggle.addEventListener('click', (togg));
