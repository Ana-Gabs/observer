// stock/ServicioStock.js
const Producto = require('./Producto');
const Cliente = require('./Cliente'); 

class ServicioStock {
    static ejecutar() {
        const producto = new Producto("Laptop", 10);

        // Crear clientes
        const cliente1 = new Cliente("Juan");
        const cliente2 = new Cliente("María");

        // Registrar clientes al producto
        console.log("Registrando clientes...");
        producto.registrarCliente(cliente1);
        producto.registrarCliente(cliente2);

        // Actualizar el stock del producto
        console.log("\nPrimera actualización de stock...");
        producto.actualizarStock(8);

        console.log("\nMaría se desuscribe del producto...");
        producto.eliminarCliente(cliente2);

        console.log("\nSegunda actualización de stock...");
        producto.actualizarStock(5);
    }
}

module.exports = ServicioStock;
