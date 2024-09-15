db.roles.insertMany([
    {
        "nombre" : "ROLE_ADMIN",
        "descripcion" : "Administrador de Eco-recycle",
        "fechaCreacion" : new Date(),
        "fechaActualizacion": null
    },
    {
        "nombre" : "ROLE_NORMAL",
        "descripcion" : "Estudiante, docente, padre de familiar registrado",
        "fechaCreacion" : new Date(),
        "fechaActualizacion": null,
    }
]);