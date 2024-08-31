db.grados.insertMany([
    {
        "nombre" : "default",
        "descripcion" : "Por defecto",
        "fechaCreacion" : new Date(),
        "fechaActualizacion": null
    },
    {
        "nombre" : "primero",
        "descripcion" : "Grado primero elemental",
        "fechaCreacion" : new Date(),
        "fechaActualizacion": null
    },
    {
        "nombre" : "segundo",
        "descripcion" : "grado segundo de primaria",
        "fechaCreacion" : new Date(),
        "fechaActualizacion": null,
    },
    {
        "nombre" : "tercero",
        "descripcion" : "grado tercero de primaria",
        "fechaCreacion" : new Date(),
        "fechaActualizacion": null,
    }
    // resto de grados hasta 11
]);

  /*db.grados.insertOne({
        "nombre" : "tercero",
        "descripcion" : "grado tercero de primaria",
        "fechaCreacion" : new Date(),
        "fechaActualizacion": null,
    });*/

    db.grados.insertOne({
        "nombre" : "undecimo",
        "descripcion" : "grado once bachillerato",
        "fechaCreacion" : new Date(),
        "fechaActualizacion": null,
    });