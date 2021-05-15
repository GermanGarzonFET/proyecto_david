import UserSchema from '../models/usuarios.model';

//favoritas
const addFavoritas= async(req,res)=>{
    let id_user = req.params.id_user;
    let id_pelicula_favoritaREQ = req.params.id_pelicula;
    const userData = await UserSchema.findById(id_user);
    const id_pelicula_favorita =userData.id_pelicula_favorita
    id_pelicula_favorita.push(id_pelicula_favoritaREQ)
    const unUpData={
        id_pelicula_favorita:id_pelicula_favorita
    }
    const upData = await UserSchema.findByIdAndUpdate(id_user, unUpData, {
        new: true
    });
    res.json(upData)
}
const removeFavoritas= async(req,res)=>{
    let id_user = req.params.id_user;
    let id_pelicula_favoritaREQ = req.params.id_pelicula;
    const userData = await UserSchema.findById(id_user);
    const id_pelicula_favorita =userData.id_pelicula_favorita
    for (var i = 0; i < id_pelicula_favorita.length; i++) {
        if (id_pelicula_favorita[i] == id_pelicula_favoritaREQ) {
            id_pelicula_favorita.splice(id_pelicula_favorita[i],1);
        }
      }
    const unUpData={
        id_pelicula_favorita:id_pelicula_favorita
    }
    const upData = await UserSchema.findByIdAndUpdate(id_user, unUpData, {
        new: true
    });
    res.json(upData)
}

//ver despues
const addVerDespues= async(req,res)=>{
    let id_user = req.params.id_user;
    let id_pelicula_ver_despuesREQ = req.params.id_pelicula;
    const userData = await UserSchema.findById(id_user);
    const id_pelicula_ver_despues =userData.id_pelicula_ver_despues
    id_pelicula_ver_despues.push(id_pelicula_ver_despuesREQ)
    const unUpData={
        id_pelicula_ver_despues:id_pelicula_ver_despues
    }
    const upData = await UserSchema.findByIdAndUpdate(id_user, unUpData, {
        new: true
    });
    res.json(upData)
}
const removeVerDespues= async(req,res)=>{
    let id_user = req.params.id_user;
    let id_pelicula_ver_despuesREQ = req.params.id_pelicula;
    const userData = await UserSchema.findById(id_user);
    const id_pelicula_ver_despues =userData.id_pelicula_ver_despues
    for (var i = 0; i < id_pelicula_ver_despues.length; i++) {
        if (id_pelicula_ver_despues[i] == id_pelicula_ver_despuesREQ) {
            id_pelicula_ver_despues.splice(id_pelicula_ver_despues[i],1);
        }
      }
    const unUpData={
        id_pelicula_ver_despues:id_pelicula_ver_despues
    }
    const upData = await UserSchema.findByIdAndUpdate(id_user, unUpData, {
        new: true
    });
    res.json(upData)
}

//id_pelicula_vistas
const addVistas= async(req,res)=>{
    let id_user = req.params.id_user;
    let id_pelicula_vistasREQ = req.params.id_pelicula;
    const userData = await UserSchema.findById(id_user);
    const id_pelicula_vistas =userData.id_pelicula_vistas
    id_pelicula_vistas.push(id_pelicula_vistasREQ)
    const unUpData={
        id_pelicula_vistas:id_pelicula_vistas
    }
    const upData = await UserSchema.findByIdAndUpdate(id_user, unUpData, {
        new: true
    });
    res.json(upData)
}
const removeVistas= async(req,res)=>{
    let id_user = req.params.id_user;
    let id_pelicula_vistasREQ = req.params.id_pelicula;
    const userData = await UserSchema.findById(id_user);
    const id_pelicula_vistas =userData.id_pelicula_vistas
    for (var i = 0; i < id_pelicula_vistas.length; i++) {
        if (id_pelicula_vistas[i] == id_pelicula_vistasREQ) {
            id_pelicula_vistas.splice(id_pelicula_vistas[i],1);
        }
      }
    const unUpData={
        id_pelicula_vistas:id_pelicula_vistas
    }
    const upData = await UserSchema.findByIdAndUpdate(id_user, unUpData, {
        new: true
    });
    res.json(upData)
}

module.exports = {
    addFavoritas,
    removeFavoritas,
    addVerDespues,
    removeVerDespues,
    addVistas,
    removeVistas
    

}