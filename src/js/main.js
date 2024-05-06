//variables
//botones
const btnLimpiar = document.getElementById("btn-limpiar");
const botonListarMascotas = document.getElementById("listar-mascota");
const btnMostrarAgregar = document.getElementById("agrega-pet");
const botonEnviarFormulario = document.querySelector("enviar");

//sectiones
const secctionCarrusel = document.getElementById("carrusel");
const sectionMain = document.getElementById("main");
const sectionListar = document.getElementById("listar");
const sectionRegistrarMascota = document.getElementById("registrar");




// listarMascotas(generarArray())
// sectionCarrusel();


// function listarPropietario(array){
//     array.forEach(duenio =>{
//         return sistemaImpresionPropietario(duenio)
//     })
// }
// // listarPropietario(generarArray())

// function sistemaImpresionPropietario(duenio){
//     console.log(`**********  Informacion Propietarios  ***********************`)
//     console.log(`
//                  Nombre: ${duenio.propietario.nombre}
//                  CC:     ${duenio.propietario.cc}
//                  Email:  ${duenio.propietario.email}
//                  Mascota: ${duenio.nombre}


//                  `)

// }




// //funciones para buscar mascota y mostrar el resultado
// let buscarMascota = ()=>{
//     let array = generarArray()
//     let buscar = prompt("Escriba el nombre de la mascota").toLocaleLowerCase()
//     return array.find(busca => busca.nombre.toLowerCase() === buscar)
// }
// let mostrarResultado =(mascotaEncontrada)=>{

//     if(mascotaEncontrada){

//         sistemaImpresion(mascotaEncontrada)
//     }else{
//         alert("mascota no encontrada")
//     }
// }
// 
// mostrarResultado( buscarMascota())

//funcion para modificar las mascotas

// let modificarMascota =(mascota, menu)=>{
//     if(mascota){
//         switch (menu) {
//             case 1:
//             let nombreNuevo = prompt("escribe nuevo nombre");
//             mascota.nombre= nombreNuevo;
//             alert(" nombre actualizado correctamente")
//                 break;
//             case 2:
//                 let fecha = new Date (prompt("EScribe la nueva fecha", "(MM/DD/YYYY)"));
//                 mascota.fNto = fecha;
//                 alert(" fecha actualizada correctamente")

//                 break;
//             case 3:
//                 let especie = prompt("Escribe la especie")
//                 mascota.especie = especie;
//                 alert("Especie modificada");
//                 break;
//             case 4:
//                 let raza = prompt("ingresa nueva raza").toLowerCase()
//                 mascota.raza = raza;
//                 alert("raza actualizada");
//                 break;
//             case 5:
//                 let peso = parseInt(prompt("ingresa el peso nuevo"));
//                 mascota.peso = peso
//                 alert("peso actualizado");
//                 break;

//             default:
//                 break;
//         }

//     }else{
//         alert("la mascota no fue encontrada");
//     }
// }
// let menuOpcionesActualizar=()=>{
//      return parseInt(prompt(` Menu de opciones
//                   1. Nombre
//                   2. Fecha de Nacimiento
//                   3. Especie
//                   4. Raza
//                   5. Peso

//      `))


// }

// function desempaquetarMascotas(array){
//   array.forEach(pet =>{
//     return pet
//   })
// }


// // modificarMascota(buscarMascota(), menuOpcionesActualizar())

// // buscar dueño con varias mascotas



// function dueniosConMasDeUnaMascota() {
//     // almacenar mascotas por cada dueño
//     const petsDuenios = {};

//     // Recorrer todas las mascotas y agrupar
//     for (const namePet in mascota) {
//         const duenioNombre = mascota[namePet].propietario.nombre;
//         if (!petsDuenios[duenioNombre]) {
//             petsDuenios[duenioNombre] = [];
//         }
//         petsDuenios[duenioNombre].push(mascota[namePet]);
//     }

//     // dueños con mas de una mascota
//     const propietariosConMasDeUnaMascota = [];

// //filtrar los dueño con mas de una mascota
//     for (const duenioNombre in petsDuenios) {
//         const mascotas = petsDuenios[duenioNombre];
//         if (mascotas.length > 1) {
//             propietariosConMasDeUnaMascota.push([duenioNombre, mascotas]);
//         }
//     }

//     // Finalmente muestra los dueños con mas de una mascota
//     propietariosConMasDeUnaMascota.forEach(([propietario, mascotas]) => {
//         console.log(`               Propietario: ${propietario}`);
//         mascotas.forEach(pet => {
//             console.log(`           Mascota: ${pet.nombre}`);
//         });
//         console.log(); // Agrega un espacio en blanco entre cada propietario
//     });
// }


// function eliminarMascota(){
//     let buscarMascota = prompt("ingrese el nombre").toLowerCase();

//     if (pet[buscarMascota]){
//         delete pet[buscarMascota]
//         alert("mascota eliminada");

//     }else{
//         alert("no se econtro mascota");
//     }
// }



// function menuPrincipal(){
//     while(true){
//         let option = parseInt(prompt(
//             `Menu de opciones:
//                  1. Registrar Mascota 
//                  2. Listar Mascotas
//                  3. Listar Dueños
//                  4.Buscar Mascota Por nombre
//                  5. Actualizar informacion Mascota
//                  6. Filtrar dueño con mas de una mascota
//                  7. Eliminar Mascota
//                  8. Salir
//                  `))

//         switch (option) {
//             case 1:
//                 agregarMascota()

//                 break;
//                 case 2:
//                 listarMascotas(generarArray());
//                 break;
//                 case 3:
//                     listarPropietario(generarArray());
//                    break;

//                 case 4:
//                     mostrarResultado(buscarMascota());
//                     break;
//                 case 5:
//                 modificarMascota(buscarMascota(), menuOpcionesActualizar());
//                 break;
//                 case 6:
//                     dueniosConMasDeUnaMascota();
//                     break;
//                 case 7:
//                     eliminarMascota()
//                     break;
//                 case 8:
//                     console.log("saliendo del sistema");
//                     break


//             default:
//                 console.log("opcion invalida")
//                 break;
//         }
//         if(option == "8"){
//             break
//         }
//     }
// }

function generarArray() {
  return Object.values(mascota);
}

function sectionCarrusel() {
  sectionListar.style.display = 'none';
  // registrarMascota.style.display = 'none';
  secctionCarrusel.innerHTML = ` <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./public/img/gato.webp" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Conoce Nuestro Servicios</h5>
        <p>Contactanos</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./public/img/perro.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Conoce Nuestros Servicios</h5>
        <p>Contactanos</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./public/img/gato.webp" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>`

  botonListarMascotas.addEventListener('click', listarMascotas)
  
  btnMostrarAgregar.addEventListener('click', MostraSeccionagregarMascota);



}

function listarMascotas() {
  sectionRegistrarMascota.style.display = 'none';
  sectionListar.style.display = 'flex';
  secctionCarrusel.style.display = 'none';
  //pasarle clases de boostrap
  sectionListar.classList.add("d-flex", "flex-wrap", "justify-content-center", "gap-3")

  generarArray().forEach((pets) => {
    sectionListar.innerHTML += `
     <div class="card bg-info card-img" style="width: 18rem; ">
            <img src="${pets.img}" class="card-img-top w-100 h-100" alt="...">
            <div class="card-body">
              <h5 class="card-title">${pets.nombre}</h5>
              <p class="card-text"></p>
              <span>Nombre:</span> <span>${pets.nombre}</span> <br>
              <span>Edad:</span>${pets.calcularEdad()} <span></span><br>
              <a href="#" class="btn btn-primary">${pets.especie}</a>
            </div>
          </div>
     
     `
  });


}

function MostraSeccionagregarMascota() {
  sectionRegistrarMascota.style.display= 'block';
  secctionCarrusel.style.display = 'none';
  sectionListar.style.display = 'none';
  sectionRegistrarMascota.innerHTML = `<form >
 <div class="mb-3 ">
   <label for="nombre-mascota" class="form-label">Nombre </label>
   <input type="text" class="form-control" id="nombre-mascota" aria-describedby="emailHelp">
   <div id="emailHelp" class="form-text"></div>
 </div>
 <div class="mb-3 ">
     <label for="especie-mascota" class="form-label">Especie</label>
     <input type="text" class="form-control" id="especie-mascota" aria-describedby="Especie" >
     <div id="emailHelp" class="form-text"></div>
   </div>
   <div class="mb-3 ">
     <label for="raza-mascota" class="form-label">Raza</label>
     <input type="text" class="form-control" id="raza-mascota" aria-describedby="Raza">
     <div id="emailHelp" class="form-text"></div>
   </div>
   <div class="mb-3 ">
     <label for="nacimiento" class="form-label">Fecha de nacimiento</label>
     <input type="date" class="form-control" id="nacimiento" aria-describedby="Fecha nacimiento">
     <div id="emailHelp" class="form-text"></div>
   </div>
   <div class="mb-3 ">
     <label for="peso" class="form-label">Peso</label>
     <input type="number" class="form-control" id="peso" aria-describedby="Peso">
     <div id="emailHelp" class="form-text"></div>
   </div>
   <button type="button" class="btn-close" disabled aria-label="Close" id="enviar"></button>

</form>`

 botonEnviarFormulario.addEventListener('click',agregarUnaMascota);
}


function agregarUnaMascota() {
  const mascos = generarArray();
  const nombreMascota = document.getElementById("nombre-mascota").value;
  const especieMascota = document.getElementById("especie-mascota").value;
  const razaMascota = document.getElementById("raza-mascota").value;
  const fechaNacimiento = document.getElementById("nacimiento").value;
  const peso = document.getElementById("peso").value;

  const pet ={
    nombre:nombreMascota,
    raza:razaMascota,
    especie:especieMascota,
    edad: fechaNacimiento,
    peso:peso
  }
  mascos.push(pet);
  alert("hi")
  
}


console.log(mascota);







window.addEventListener('load', sectionCarrusel)



