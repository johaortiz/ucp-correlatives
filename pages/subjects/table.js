// El JSON con la información de las materias
const subjects = [
    {
      "code": "MAT-101",
      "name": "Análisis Matemático I",
      "credits": "6",
      "hours": "4",
      "action": "Ver"
    },
    {
      "code": "FIS-101",
      "name": "Física I",
      "credits": "6",
      "hours": "4",
      "action": "Ver"
    },
    {
      "code": "QUI-101",
      "name": "Química General",
      "credits": "6",
      "hours": "4",
      "action": "Ver"
    },
    {
      "code": "ALG-101",
      "name": "Álgebra I",
      "credits": "6",
      "hours": "4",
      "action": "Ver"
    },
    {
      "code": "BIO-101",
      "name": "Biología Celular",
      "credits": "6",
      "hours": "4",
      "action": "Ver"
    },
    {
      "code": "ING-101",
      "name": "Inglés Básico",
      "credits": "6",
      "hours": "4",
      "action": "Ver"
    },
    {
      "code": "EDU-101",
      "name": "Educación General",
      "credits": "6",
      "hours": "4",
      "action": "Ver"
    }
  ];
  
  // Selecciona el tbody donde se insertarán las filas
  const tbody = document.querySelector('tbody');
  
  // Iterar sobre el JSON y agregar cada fila al tbody
  subjects.forEach(subject => {
    // Crear una nueva fila (tr)
    const row = document.createElement('tr');
    
    // Crear y agregar las celdas (td) a la fila
    row.innerHTML = `
      <td>${subject.code}</td>
      <td>${subject.name}</td>
      <td>${subject.credits}</td>
      <td>${subject.hours}</td>
      <td>${subject.action}</td>
    `;
    
    // Insertar la fila en el tbody
    tbody.appendChild(row);
  });
  