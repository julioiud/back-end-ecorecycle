db.secciones.insertMany([
    {
        "nombre" : "default",
        "descripcion" : "Por defecto",
        "fechaCreacion" : new Date(),
        "fechaActualizacion": null
    },
    {
        "nombre" : "seccion1",
        "descripcion" : "seccion1",
        "fechaCreacion" : new Date(),
        "fechaActualizacion": null
    },
    // resto de secciones aqui
]);

  /*db.secciones.insertOne({
        "nombre": "carton",
        "descripcion": "cajas de carton",
        "fechaCreacion": new Date()
    });*/