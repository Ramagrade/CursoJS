function mostrar() 
  let edad;
  edad = parseInt(document.getElementById("txtEdad").value);
  if (edad >17) {
    alert("sos adulto");
  } else {
    if (edad >= 13) {
      alert("sos adolescente");
    } else {
    alert("sos niños");
  }
  }
