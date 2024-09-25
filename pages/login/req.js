document.addEventListener("DOMContentLoaded", function() {
    const dniInput = document.getElementById("dni");
    const savedDni = localStorage.getItem("dni");
    if (savedDni) {
      dniInput.value = savedDni;
        }
});

document.addEventListener("DOMContentLoaded", function() {
    localStorage.removeItem("dni");
  });
  