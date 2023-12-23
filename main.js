
const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El nombre debe tener más de 4 caracteres.'
        });
        return; 
    }
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingresa un correo electrónico válido.'
        });
        return;
    }
    if (password.length < 6) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña debe tener más de 6 caracteres.'
        });
        return;
    }

    const usuario = {
        nombre: nombre,
        email: email,
        password: password
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
    Swal.fire({
        icon: 'success',
        title: 'Suscripción Exitosa',
        text: 'Los datos han sido registrados correctamente.'
    });

    userForm.reset();
});
