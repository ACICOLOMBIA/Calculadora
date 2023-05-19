document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("valor-credito");
  
    function mostrarValor() {
      // Eliminar separadores de miles cuando se hace clic en el elemento o se pierde el enfoque
      const eliminarSeparadores = function() {
        const valorSinSeparador = input.value.replace(/\./g, "");
        const valorSinEtiqueta = valorSinSeparador.replace(/COP/g, "").trim();
        input.value = valorSinEtiqueta;
      };
  
      input.addEventListener("focus", eliminarSeparadores);
      input.addEventListener("blur", eliminarSeparadores);
  
      // Formatear el valor cuando el usuario deja de enfocar el elemento
      input.addEventListener("blur", function() {
        const valor = Number(input.value);
        const valorConSeparador = valor.toLocaleString("es-AR", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0
        });
        
        input.value = valorConSeparador;
      });
  
      // Eliminar los puntos cuando se está editando el valor
      input.addEventListener("input", function() {
        const valorSinSeparador = input.value.replace(/,/g, "");
        const valorSinPuntos = valorSinSeparador.replace(/\./g, "");
        const valorSinEtiqueta = valorSinPuntos.replace(/COP/g, "").trim();
        input.value = valorSinEtiqueta;
      });
  
      // Formatear el valor inicialmente
      const valor = Number(input.value);
      const valorConSeparador = valor.toLocaleString("es-AR", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
      });
  
      input.value = valorConSeparador;
    }
  
    mostrarValor();
  });
  
  function mostrarValor() {
    var rango = document.getElementById("rango");
    var valor = document.getElementById("valorSeleccionado");
    valor.innerHTML ="<span style='font-family: Arial;'> haz seleccionado <strong>" + rango.value + "</strong> años por ende tu plazo en meses es de <strong>" + rango.value * 12 +"</span></strong>";
    
  }

  function mostrarValor2() {
    var rango = document.getElementById("rango2");
    var valor = document.getElementById("valorSeleccionado2");
    valor.innerHTML ="<span style='font-family: Arial;'> haz seleccionado <strong>" + rango.value + "</strong> años por ende tu plazo en meses es de <strong>" + rango.value * 12 +"</span></strong>";
    
  }

  function mostrarValor1() {
    var rango = document.getElementById("rango1");
    var valor = document.getElementById("valorSeleccionado1");
    valor.innerHTML ="<span style='font-family: Arial;'> haz seleccionado <strong>" + rango.value + "</strong> años por ende tu plazo en meses es de <strong>" + rango.value * 12 +"</span></strong>";
    
  }

  const input = document.getElementById("nombre");

  input.addEventListener("keyup", function() {
  this.value = this.value.toUpperCase();
  });







