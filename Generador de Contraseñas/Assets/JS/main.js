'use strict';

const generadorDeContraseña = longitudDePalabra => {

  let caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-='

  let contraseña = '';

  for (let i = 1; i <= longitudDePalabra; i++) {

    let caracteresContados = Math.floor(Math.random() * caracteres.length);

    contraseña += caracteres.charAt(caracteresContados)

  }

  if (contraseña.length === 15) {

    return contraseña;

  }

}

const contraseña = document.getElementById('contraseña');

let nuevaContraseña = generadorDeContraseña(15);

contraseña.textContent = nuevaContraseña;

const boton = document.querySelector('#cambioDeFormato');

boton.addEventListener('click', () => {

nuevaContraseña = generadorDeContraseña(15);

contraseña.textContent = nuevaContraseña;

})

const cuenta = {

  hora: new Date().getHours(),
  minutos: new Date().getMinutes(),
  segundos: new Date().getSeconds(),
  meridiano: ''

}

const diasDeLaSemana = {

  dia: new Date().getDate(),
  mes: new Date().getMonth() + 1,
  año: new Date().getFullYear()

}

let {hora, minutos, segundos, meridiano} = cuenta;

let {dia, mes, año} = diasDeLaSemana;

let numeroRecorredor = new Date().getDay();

 const diaDeLaSemanaLetras = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab']; 

const cuentaRegresivaFuncion = () => {

  const cuentaRegresiva = document.getElementById('cuentaRegresiva');

  segundos--;

  if (hora == `00` && minutos == 0 && segundos == 0 && meridiano == 'AM') {

  dia--;

    numeroRecorredor--;

   if (numeroRecorredor < 0) {

    numeroRecorredor = 6;

   }

  if (dia < 1) {

    dia = 31;




    mes--;

    if (mes == '04') {

    dia = 30;

  } else if (mes == '02') {

    dia = 28;

  } else if (mes == 11) {

    dia = 30;

  } else if (mes == '06') {

    dia = 30;

  } else if (mes == 9) {

    dia = 30;

  }

  }

  if (mes < 1) {

    mes = 12;

    año--;

  }

}

if (segundos < 0) {

  if (minutos == 0 && hora > 0) {

    minutos = 60;
    hora--;

 }

    minutos--;
    segundos = 60;

  }


  dia = parseInt(dia)

      mes = parseInt(mes)

    año = parseInt(año)

dia = dia < 10 ? '0' + dia : dia;

mes = mes < 10 ? '0' + mes : mes;

año = año < 10 ? '0' + año : año;

   if (hora == 0 && minutos == 0 && segundos == 0) {

    hora = 23;
  minutos = 60;
  segundos = 60;

 } 

if (año < 1) {

    año = new Date().getFullYear();

}

hora = parseInt(hora);

hora = hora < 10 ? '0' + hora : hora;

 meridiano = hora < 12 ? 'AM' : 'PM';

minutos = parseInt(minutos);

minutos = minutos < 10 ? '0' + minutos : minutos;

segundos = segundos < 10 ? '0' + segundos : segundos;

 

cuentaRegresiva.textContent = `${dia}-${mes}-${año} ${diaDeLaSemanaLetras[numeroRecorredor]} ${hora}:${minutos}:${segundos}`;
}

const detenerIntervalo = setInterval(cuentaRegresivaFuncion, -1);