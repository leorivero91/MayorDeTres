rotulo1.innerHTML = "Ingrese el primer número";
rotulo2.innerHTML = "Ingrese el segundo número";
rotulo3.innerHTML = "Ingrese el tercer número";

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
let num1: number = Number(dato1.value);
let num2: number = Number(dato2.value);
let num3: number = Number(dato3.value);

  if (num1 > num2 && num1 > num3){
    console.log("El numero mayor es",num1);
  } else if ((num2 > num1 && num2 > num3){
    console.log("El numero mayor es",num2);
    } else if(num3 > num1 && num3 > num2){
      console.log("El numero mayor es", num3);
    }
  // switch ((Number(dato1.value), dato2.value, dato3.value)) {
  //   case (num1 > num2 && num1 > num3):
  //     console.log("El mayor es", num1);
  //     break;
  //   case num2 > num3 > num1:
  //     console.log("El mayor es", num2);
  //     break;
  //   case num3 > num1 > num2:
  //     console.log("El mayor es", num3);
  //     break;
  //   default:
  // }
});
