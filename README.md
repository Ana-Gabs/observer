## Proyecto de Gestión de Stock con el Patrón Observer en Node.js
Este proyecto implementa el **patrón de diseño Observer** en Node.js, permitiendo la notificación automática a los clientes suscritos cuando hay cambios en el stock de un producto. Este patrón facilita la interacción entre objetos dependientes sin crear una conexión rígida entre ellos.

## Estructura del Proyecto

│   index.js                 # Punto de entrada de la aplicación
│   package-lock.json        # Archivo de dependencias
│   package.json             # Archivo de configuración de dependencias
│   README.md                # Documentación del proyecto
│
└───stock                    # Clases principales del sistema de stock
        Cliente.js           # Representa a los clientes que se suscriben a notificaciones
        Producto.js          # Modelo para productos con gestión de stock y notificaciones
        ServicioStock.js     # Servicio que gestiona el flujo de ejecución del programa



## Ejecute el programa 
Para correr el programa escriba **node index.js** sobre la terminal donde esta abierto el programa.

## Flujo de ejecución
Registrando clientes...

Primera actualización de stock...
El stock del producto "Laptop" ha sido actualizado a 8.
Juan ha sido notificado: El stock de "Laptop" es ahora de 8.
María ha sido notificado: El stock de "Laptop" es ahora de 8.

María se desuscribe del producto...

Segunda actualización de stock...
El stock del producto "Laptop" ha sido actualizado a 5.
Juan ha sido notificado: El stock de "Laptop" es ahora de 5.

## Clases principales y metodos
1. Clase Producto (stock/Producto.js) --> Esta clase representa el producto y gestiona los clientes suscritos para notificaciones.
**Metodos principales**
    1. registrarCliente(cliente) --> Añade un cliente a la lista de notificaciones.
    2. eliminarCliente(cliente) --> Elimina un cliente de la lista de notificaciones.
    3. notificarClientes() --> Notifica a todos los clientes suscritos sobre cambios en el stock.
actualizarStock(cantidad) --> Actualiza el stock y notifica a los clientes.
2. Clase Cliente (stock/Cliente.js) --> Esta clase representa a los clientes que reciben notificaciones sobre cambios en el stock de productos.
**Metodos principales**
    1. actualizar(producto) --> Recibe información del producto actualizado y muestra un mensaje de notificación.
3. Clase ServicioStock (stock/ServicioStock.js) --> Esta clase gestiona el flujo principal de la aplicación y las interacciones entre productos y clientes.
**Metodos principales**
    1. ejecutar() --> Configura el producto, registra los clientes, actualiza el stock y simula la interacción completa.

## Implementación del Patrón Observer
El patrón Observer permite que múltiples objetos (clientes) se suscriban a un objeto central (producto). Cuando el objeto central cambia su estado (stock), notifica automáticamente a los objetos suscritos.
De esta manera producto actúa como el Subject (emisor), que mantiene una lista de clientes suscritos. Para que Cliente actue como el Observer (receptor), que recibe las notificaciones. Mientas que ServicioStock administra las interacciones. Este patrón es ideal para aplicaciones que requieren una respuesta dinámica a cambios, como sistemas de notificaciones o actualizaciones en tiempo real.