  
  
let contenitore =  document.createElement('div');
contenitore.style.borderStyle = 'solid';
contenitore.style.height = '40px';
contenitore.style.width = '95px';
contenitore.style.position = 'absolute';
contenitore.style.top = '250px';
contenitore.style.left = '100px';


let numero = document.createElement('span');
numero.innerText = '1';

let simbolo = document.createElement('a');
simbolo.innerText = 'H';
simbolo.style.fontSize = '40px';
simbolo.href = 'https://it.wikipedia.org/wiki/Idrogeno';

let idrogeno = document.createElement('span');
idrogeno.innerText = 'idrogeno';

contenitore.appendChild(numero);
contenitore.appendChild(simbolo);
contenitore.appendChild(idrogeno);

let contenutoPrincipale = document.getElementById('contenuto-principale');
contenutoPrincipale.appendChild(contenitore);
