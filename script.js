function validarFormulario(){
    var nombre = document.getElementById("nombre").value;

    if (nombre === ""){
        alert("Por favor, ingrese su nombre.")
        return false
    }
    alert("Formulario enviado con exito")
    return true

}

document.getElementById("cambiarcolor").onclick = function(){
    var titulo = document.getElementById("titulo"); 
    titulo.style.color = titulo.style.color == "red" ? "#4CAF50": "red";
}