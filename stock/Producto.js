// stock/Producto.js
class Producto {
    constructor(nombre, stockInicial) {
        this.nombre = nombre;
        this.stock = stockInicial;
        this.clientes = []; // Lista de clientes suscritos
    }

    registrarCliente(cliente) {
        this.clientes.push(cliente);
    }

    eliminarCliente(cliente) {
        this.clientes = this.clientes.filter(c => c !== cliente);
    }

    notificarClientes() {
        this.clientes.forEach(cliente => cliente.actualizar(this));
    }

    actualizarStock(cantidad) {
        this.stock = cantidad;
        console.log(`El stock del producto "${this.nombre}" ha sido actualizado a ${this.stock}.`);
        this.notificarClientes();
    }
}

module.exports = Producto;
