db.productovalidos.insertMany([
    {
        "serial": "1",
        "patron": "8712000", //pais-fabricante(6)
        "fechaCreacion": new Date(),
        "tipoProducto" : {
           "_id": "66cf86cbfc6212acf142a0b7" // lata
        },
        "fechaActualizacion": null,
    },
    {
        "serial": "2",
        "patron": "5449000", // pais-fabricante(6)
        "fechaCreacion": new Date(),
        "tipoProducto" : {
            "_id": "66cf88e9fc6212acf142a0b9"
        },
        "fechaActualizacion": null
    },
    // ALIMENTAR CON MÁS REGISTROS
]);