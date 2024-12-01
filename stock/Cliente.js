// stock/Cliente.js
class Cliente {
    constructor(nombre) {
        this.nombre = nombre;
    }

    actualizar(producto) {
        console.log(`${this.nombre} ha sido notificado: El stock de "${producto.nombre}" es ahora de ${producto.stock}.`);
    }
}

module.exports = Cliente;
