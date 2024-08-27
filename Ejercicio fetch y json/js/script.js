// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él



//Intento 1 (sin resultados)

/*fetch("json/data.json")
.then(response => {
if (!response.ok){
  throw new Error ("Error en la solicitud: " + response.status);
}
return response.json();
})
.then(data => {
  const students = data.students;
  showData(students);
})

.catch(error => {
  console.error("Hubo un problema con la solicitud del fetch", error);
}) */

  

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */

function showData(dataArray) {
  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  }
}

//Intento 2 

/*async function FETCHXD() {

  const response = await fetch(DATA_URL);
  const data = await response.json();
    console.log(data); 
  showData(data.students);
}

FETCHXD(); */

//Intento 3 (PROFESOR)

/*document.addEventListener('DOMContentLoaded',()=>{ //Acordate, éste es el INICIO de tu programa.
  fetch(DATA_URL)
  .then(response=> response.json())
  .then(data=>{
    console.log(data.students);
    showData(data.students);
    
  })
  
}); */

fetch(DATA_URL)
.then(response => {
if (!response.ok){
  throw new Error ("Error en la solicitud: " + response.status);
} else {
return response.json();
}
})
.then(data => {
  console.log(data);
  showData(data.students);
})

.catch(error => {
  console.error("Hubo un problema con la solicitud del fetch", error);
}) 




// Escribe el código necesario para realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData
