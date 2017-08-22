var form =  document.getElementsByTagName('form')[0];

var inputNombre = document.getElementById("nombre");
var inputApellidos = document.getElementById("apellidos");
var emailInput = document.getElementById("email");
var telefonoInput = document.getElementById("telefono");
var comentarioInput = document.getElementById("comentario");
var otrosContainer = document.getElementById("otros_div");
var submitButton = document.getElementById("enviar");

var conocido_por = {
    conocido_por1: document.getElementById("conocido_por_1"),
    conocido_por2: document.getElementById("conocido_por_2"),
    conocido_por3: document.getElementById("conocido_por_3"),
    conocido_por4: document.getElementById("conocido_por_4")
};

/*Hacer que el imput aparezca si 'Otros' es marcado */
for(radio in conocido_por) {    
    conocido_por[radio].onclick = function() {
        
        if(this.value === "Otros"){            
            otrosContainer.style.display = "block";
        }
        else{
            otrosContainer.style.display = "none";
        }
    }
}

/*Validar que el comentario no exceda las 150 palabras  */
function validarComentario(){    
    if (comentarioInput.value.trim().split(/[\s]+/).length > 150) {
        alert("No puedes sobrepasar las 150 palabras!");
        return false;
    }
    else
        return true;
}

/*Validar los campos requeridos y los formatos de los imputs */
form.addEventListener("submit", function (event) {
    if (inputNombre.checkValidity() === false) {
        alert("Escribe tu nombre");
        inputNombre.focus();
        event.preventDefault();
        return false;
    }

    if (inputApellidos.checkValidity() === false) {
        alert("Escribe tus apellidos");
        inputApellidos.focus();
        event.preventDefault();
        return false;
    }

    if (emailInput.checkValidity() === false) {
        alert("Introduce un email correcto");
        emailInput.focus();
        event.preventDefault();
        return false;
    }

    if (conocido_por.conocido_por1.checkValidity() === false) {
        alert("Introduce una opción de como nos conocimos");
        event.preventDefault();
        return false;
    }

    if (telefonoInput.checkValidity() === false) {
        alert("Introduce un teléfono válido, recuerda los espacios, el formato es: '### ## ## ##'");
        telefonoInput.focus();
        event.preventDefault();
        return false;
    }

     if(!validarComentario()){
         comentarioInput.focus();
         event.preventDefault();
         return false;
     }

    /*Enviar notificación cuando todo vaya bien*/
    var notification = Notification || mozNotification || webkitNotification;
    notification.requestPermission(function (permission) {
        if (Notification.permission === "granted") {
            var n = new Notification("El formulario ha sido enviado!", {tag: 'Notificación'});
        }
        else{
            alert("El formulario ha sido enviado!");
        }
    });
    
    /*Resetear los valores */
    event.preventDefault();
    form.reset();
});
