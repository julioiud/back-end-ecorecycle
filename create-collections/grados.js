db.grados.insertMany([{
        "nombre": "default",
        "descripcion": "Por defecto",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null
    },
    {
        "nombre": "primero",
        "descripcion": "Grado primero elemental",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null
    },
    {
        "nombre": "segundo",
        "descripcion": "grado segundo de primaria",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null,
    },
    {
        "nombre": "tercero",
        "descripcion": "grado tercero de primaria",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null,
    },
]);

db.grados.insertMany([{
        "nombre": "cuarto",
        "descripcion": "grado cuarto de primaria",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null,
    },
    {
        "nombre": "quinto",
        "descripcion": "grado quinto de primaria",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null,
    },
    {
        "nombre": "sexto",
        "descripcion": "grado sexto de bachillerato",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null,
    },
    {
        "nombre": "septimo",
        "descripcion": "grado septimo de bachillerato",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null,
    },
    {
        "nombre": "octavo",
        "descripcion": "grado octavo de bachillerato",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null,
    },
    {
        "nombre": "noveno",
        "descripcion": "grado noveno de bachillerato",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null,
    },
    {
        "nombre": "decimo",
        "descripcion": "grado decimo de bachillerato",
        "fechaCreacion": new Date(),
        "fechaActualizacion": null,
    },
    // resto de grados hasta 11
]);

/*db.grados.insertOne({
      "nombre" : "tercero",
      "descripcion" : "grado tercero de primaria",
      "fechaCreacion" : new Date(),
      "fechaActualizacion": null,
  });*/

db.grados.insertOne({
    "nombre": "undecimo",
    "descripcion": "grado once bachillerato",
    "fechaCreacion": new Date(),
    "fechaActualizacion": null,
});