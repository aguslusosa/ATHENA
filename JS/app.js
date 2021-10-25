// MENÚ HAMBURGUESA
function cambiarClase(){
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');
}

//VALIDACIONES FORMULARIO
function validar(){
    var form = document.form;

    if (document.formulario.nombre.value.length == 0) {
        alert("El campo Nombre está vacío");
        document.fvalida.nombre.focus();
        return 0;
    }

    if(document.formulario.email.value.length == 0){
        alert("El campo Email está vacío");
        form.email.focus();
        return false;
    }

    if(document.formulario.telefono.value.length == 0){
        alert("El campo Teléfeno está vacío");
        form.telefono.focus();
        return false;
    }

    if(document.formulario.mensaje.value.length == 0){
        alert("El campo Mensaje está vacío");
        form.mensaje.focus();
        return false;
    }
    alert("Datos enviados con éxito");
    document.formulario.submit();
}