
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const problema = document.getElementById('problema').value;

    const mensaje = `Hola, mi nombre es ${nombre}. Mi número es ${telefono}. Tengo el siguiente problema con un electrodoméstico: ${problema}`;
    const url = `https://wa.me/5491123456789?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});
