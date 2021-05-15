import { Schema, model } from 'mongoose';

const PeliculasSchema = new Schema({
    nombre: String,
    descripcion:String,
    img:String,
    triller:String,
    fecha_estreno:Date,
    id_genero: [{ //guarda a la id de los generos
        ref: "Generos",
        type: Schema.Types.ObjectId
    }],
    id_actor: [{ //una propidad de tipo id que hace referencia a los autores
        ref: "Actores",
        type: Schema.Types.ObjectId
    }],
    

}, {
    versionKey: false
})

export default model("Peliculas", PeliculasSchema);