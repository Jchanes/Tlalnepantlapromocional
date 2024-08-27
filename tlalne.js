//pone el mismo header a todos los documentos html
document.getElementById('header').innerHTML = fetch('header.html')
.then(response => response.text())
.then(data => document.getElementById('header').innerHTML = data);

//pone el mismo footer a todos losdocumentos 
document.getElementById('footer').innerHTML = fetch('footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data);

document.getElementById('telefono').addEventListener('input', function (e) {
    
    //reemplaza los valores no numericos
    this.value = this.value.replace(/\D/g, '');

    //que el numero no sea mayor de 10 digitos
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});

