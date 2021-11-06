const contenedor = document.getElementById("contenedor");
const textoNuevaEntrada = document.getElementById("textoNuevaEntrada");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const datos = new FormData(formulario);
  const  noValido = /\s/;
  // console.log(datos);
  console.log(datos.get("nuevoLi"));
  // console.log(datos.getAll("nuevoLi"));
  if (datos.get("nuevoLi") === "" ||  noValido.test(datos.get("nuevoLi"))) {
    alert("No puedes agregar una entrada vacía");
  } else {
    agregarLi();
  }
})

const agregarLi = () => {
  const nuevoLi = document.createElement("li");
  nuevoLi.innerText = textoNuevaEntrada.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", () => {
    eliminarLi(nuevoLi)
  });
  const  editarBtn = document.createElement("button");
  editarBtn.innerText = "Editar";

  editarBtn.addEventListener("click", () => {
    editarLi(nuevoLi)
  });

  nuevoLi.appendChild(editarBtn);
  nuevoLi.appendChild(deleteBtn);
  contenedor.appendChild(nuevoLi);
  textoNuevaEntrada.value = "";
}

const eliminarLi = (li ) => {
  li.remove();
}

const  editarLi = (li ) => {
  const editar = prompt("Ingresa el nuevo texto");
  li.innerText = editar;
}

