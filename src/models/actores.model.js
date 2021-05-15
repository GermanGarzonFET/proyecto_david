import { Schema, model } from 'mongoose';

const actoresSchema = new Schema({

    nombre: String,
    apellido: String,
    nacionalidad: String

}, {
    timestamps: true,
    versionKey: false
});


export default model('Actores', actoresSchema);