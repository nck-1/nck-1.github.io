//Validación de un formulario con Javascript
//Fuente: https://desarrolloweb.com/articulos/1767.php

// Esta función valida todos los campos del form.
// Si alguno no cumple con los requisitos, se aborta
// con return. Caso contrario, al final se realiza
// efectivamente el envio de los datos.

function valida_envia() {
  //valido el nombre
  if (document.fvalida.nombre.value.length == 0) {
    alert("Tiene que escribir su nombre");
    document.fvalida.nombre.focus();
    return 0;
  }

  if (document.fvalida.apellido.value.length == 0) {
    alert("Tiene que escribir su apellido");
    document.fvalida.apellido.focus();
    return 0;
  }

  if (document.fvalida.email.value.length == 0) {
    alert("Tiene que escribir su email");
    document.fvalida.email.focus();
    return 0;
  }

  let invalidEmail = 1;
  let invalidEmailDot = 1;
  for (char of document.fvalida.email.value) {
    if (char == "@") {
      invalidEmail = 0;
    }
    if (char == ".") {
      invalidEmailDot = 0;
    }
  }

  if (invalidEmail | invalidEmailDot) {
    alert("Tiene que escribir un email válido");
    document.fvalida.email.focus();
    return 0;
  }

  if (document.fvalida.phone.value == 0) {
    alert("Tiene que escribir un teléfono");
    document.fvalida.phone.focus();
    return 0;
  }

  if (document.fvalida.comentarios.value.length == 0) {
    alert("Tiene que escribir comentarios");
    document.fvalida.comentarios.focus();
    return 0;
  }

  //valido la edad. tiene que ser entero mayor que 18
  //   edad = document.fvalida.edad.value;
  //   edad = validarEntero(edad);
  //   document.fvalida.edad.value = edad;
  //   if (edad == "") {
  //     alert("Tiene que introducir un número entero en su edad.");
  //     document.fvalida.edad.focus();
  //     return 0;
  //   } else {
  //     if (edad < 18) {
  //       alert("Debe ser mayor de 18 años.");
  //       document.fvalida.edad.focus();
  //       return 0;
  //     }
  //   }

  //   //valido el interés
  //   if (document.fvalida.interes.selectedIndex == 0) {
  //     alert("Debe seleccionar un motivo de su contacto.");
  //     document.fvalida.interes.focus();
  //     return 0;
  //   }

  //Finalmente, si llegó hasta aqui, se envia el form.
  //   alert("Muchas gracias por enviar el formulario");

  alert(`¡Muchas gracias por enviar el formulario!
Se enviaron los siguientes datos:
Nombre: ${document.fvalida.nombre.value}
Apellido: ${document.fvalida.apellido.value}
Email: ${document.fvalida.email.value}
Teléfono: ${document.fvalida.phone.value}
Comentarios: ${document.fvalida.comentarios.value}`);

  //   document.fvalida.submit();
}

// function validarEntero(valor) {
//   //intento convertir a entero.
//   //si era un entero no le afecta, si no lo era lo intenta convertir
//   valor = parseInt(valor);

//   //Compruebo si es un valor numérico
//   if (isNaN(valor)) {
//     //entonces (no es numero) devuelvo el valor cadena vacia
//     return "";
//   } else {
//     //En caso contrario (Si era un número) devuelvo el valor
//     return valor;
//   }
// }
