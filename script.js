for (const elemento of elementi) {
    let contenitore = document.createElement('div');
    contenitore.style.borderStyle = 'solid';
    contenitore.style.height = '70px';
    contenitore.style.width = '75px';
    contenitore.style.position = 'absolute';
    contenitore.style.top = 70 * elemento.ypos + 'px';
    contenitore.style.left = 75 * elemento.xpos + 'px';
    contenitore.style.boxSizing = 'border-box';
    contenitore.style.padding = '2px';
    contenitore.style.backgroundColor = '#' +  elemento['cpk-hex'];

    let numero = document.createElement('span');
    numero.innerText = elemento.number;
    numero.style.display = 'block';

    let simbolo = document.createElement('a');
    simbolo.innerText = elemento.symbol;
    simbolo.style.fontSize = '25px';
    simbolo.href = elemento.source;
    simbolo.style.display = 'block';
    simbolo.style.textAlign = 'center';

    let idrogeno = document.createElement('span');
    idrogeno.innerText = elemento.name;
    idrogeno.style.display = 'block';
    idrogeno.style.fontSize = '12px';
    idrogeno.style.textAlign = 'center';

    contenitore.appendChild(numero);
    contenitore.appendChild(simbolo);
    contenitore.appendChild(idrogeno);
    
    let contenutoPrincipale = document.getElementById('contenuto-principale');
    contenutoPrincipale.style.position = 'relative';
    contenutoPrincipale.appendChild(contenitore);
}