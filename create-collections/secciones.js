db.secciones.insertMany([{
        "nombre": "default",
        "descripcion": "Por defecto",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null
    },
    {
        "nombre": "seccion1",
        "descripcion": "seccion1",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null
    },
    // resto de secciones aqui
]);

db.secciones.insertMany([{
        "nombre": "preescolar",
        "descripcion": "preescolar",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null
    },
    {
        "nombre": "primaria",
        "descripcion": "primaria",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null
    },
    {
        "nombre": "bachillerato",
        "descripcion": "bachillerato",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null
    },
]);
/*db.secciones.insertOne({
      "nombre": "carton",
      "descripcion": "cajas de carton",
      "fechaCreacion": new Date()
  });*/