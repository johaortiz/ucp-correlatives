document
  .getElementById("dni-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const dni = document.getElementById("dni").value;

    if (dni) {
      localStorage.setItem("dni", dni);
      window.location.href = "/pages/login/index.html";
    } else {
      alert("Por favor, ingrese un DNI válido.");
    }
  });
