db.tipoproductos.insertMany([
    {
        "nombre": "vidrio",
        "descripcion": "Envases, botellas de vidrio",
        "fechaCreacion": new Date()
    },
    {
        "nombre": "plastico",
        "descripcion": "Envases, bolsas de plástico",
        "fechaCreacion": new Date()
    }
  ]);

db.tipoproductos.insertOne({
        "nombre": "lata",
        "descripcion": "Latas cerveza, gaseosa, etc",
        "fechaCreacion": new Date()
});
  
db.tipoproductos.insertOne({
    "nombre": "desconocido",
    "descripcion": "Por defecto si no se localiza",
    "fechaCreacion": new Date()
});
