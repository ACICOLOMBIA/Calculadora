const botonEnviar = document.getElementById('boton-enviar');
const canvasGrafica = document.getElementById('grafica');
let grafica = null;

botonEnviar.addEventListener('click', function() {


    // Obtenemos los valores de los inputs
    var input1 = document.getElementById("valor-credito").value;
    var input2 = document.getElementById("rango").value;
    var input3 = document.getElementById("tasa-interes").value;
    var input4 = document.getElementById("nombre").value;
    var input5 = document.getElementById("telefono").value;
    var input6 = document.getElementById("mail").value;
    
    emailjs.send("service_zotljs5", "template_1r2bpbi", {
        to_name: input4,
        valor: input1,
        plazo: input2,
        taza: input3,
        tel: input5,
        mail: input6
        })
    
    .then(function(response) {
      console.log('Correo electrónico enviado correctamente', response);
      // Aquí puedes mostrar un mensaje de éxito al usuario o realizar cualquier otra acción después de enviar el correo electrónico.
    })
    .catch(function(error) {
      console.error('Error al enviar el correo electrónico', error);
      // Aquí puedes mostrar un mensaje de error al usuario o realizar cualquier otra acción en caso de que ocurra un error.
    });
  
    // Convertimos los valores a números y los sumamos
    input1 = input1.replace("COP", "").replace(/\./g, "").replace(" ","");

    input9=validarCheckbox()
    input10=validarCheckbox1()

    function validarCheckbox() {
        var checkBox = document.getElementById("terminos");
        if (checkBox.checked == true){
          return("Checkbox marcado");
        } else {
          return("Checkbox no marcado");
        }
      }

    function validarCheckbox1() {
    var checkBox = document.getElementById("abeas-data");
    if (checkBox.checked == true){
        return("Checkbox marcado");
    } else {
        return("Checkbox no marcado");
    }
    }

    // Verificamos que todos los campos estén llenos
    if (input1 == "" || input2 == "" || input3 == "" || input4 == "" || input5 == "" || input6 == "") {
        document.getElementById("resultado").innerHTML = "Por favor diligencie todos los datos";
        return;    
    }

    if (input9 == "Checkbox no marcado") {
        document.getElementById("resultado").innerHTML = "Por favor acepte los terminos y condiciones";
        return;    
    }
    
    if (input10 == "Checkbox no marcado") {
        document.getElementById("resultado").innerHTML = "Por favor acepte la protección de datos personales";
        return;    
    }

    var mensaje = "El pago de su cuota mensual, es de: "

    var P = parseInt(input1)
    var i = parseInt(input3) / 100 / 12
    var n = parseInt(input2)*12
    var formu = ((P * i) / (1 - Math.pow(1 + i, -n)));

    var cuota = formu
    var seguros = cuota * 8/100
    var resultado = cuota + seguros

    var int = P * i
    var cap = cuota - int


    var ingresos = parseInt(input1)
    var cuotamensual = ingresos * 30 / 100
    var intereses = parseInt(input3) / 100 / 12
    var plazoenanos = parseInt(input2)*12
    
    var parte1 = 1+intereses
    var parte2 = parte1 ** (-plazoenanos)
    var parte3 = 1-parte2
    var parte4 = cuotamensual * parte3
    var final = parte4 / intereses

    prueba = document.getElementById("boton-enviar").value;
    prueba = parseInt(prueba) 
    if(prueba == 1) {
      resultado = final;
      mensaje = "Según nuestros calculos, un banco puede prestarte hasta: "

      cuotaparapago = ((final*intereses)/(1 - Math.pow(1 + intereses, -n)))
      int = final * intereses
      cap = cuotaparapago - int
      seguros = cuotaparapago*0.08
    }

    mostrar = resultado.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
    
    // Mostramos el resultado en el div
    document.getElementById("resultado").innerHTML = mensaje + mostrar;

    

    const datosGrafica = [cap, int, seguros];
  
    // Borra la gráfica anterior si ya existe
    if (grafica) {
      grafica.destroy();
    }
    
    // Crea la nueva gráfica
    grafica = new Chart(canvasGrafica, {
      type: 'doughnut',
      data: {
        labels: ['Capital', 'Interés', 'Seguros'],
        datasets: [{
          label: 'Valor a pagar: ',
          data: datosGrafica,
          backgroundColor: [
            'rgba(19, 45, 235)',
            'rgba(231, 19, 19)',
            'rgba(128, 128, 128)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(128, 128, 128, 0.2)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
      }
    });
  });


