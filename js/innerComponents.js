// Navbar insertada en el header
fetch("./components/navbar")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("inner-nav").innerHTML = html;
  });

// Navbar insertada en el header
fetch("./components/login")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("inner-sections").innerHTML = html;
  });

