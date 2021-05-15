import actoresSchema from '../models/actores.model';

//get all

const getActores = async(req, res) => {

    const dataAutores = await actoresSchema.find();
    res.status(200).json(dataAutores);
};
//get one

const getActor = async(req, res) => {
    let id = req.params.id;
    const data = await actoresSchema.findById(id);
    res.status(200).json(data);
};


//add autor

const addActores = async(req, res) => {
    let { nombre, apellido, nacionalidad } = req.body;
    const newAutor = new actoresSchema({
        nombre,
        apellido,
        nacionalidad
    });
    const saveAutor = await newAutor.save();
    res.status(200).json(saveAutor);
};
//edit autor

const editActores = async(req, res) => {
    let id = req.params.id;
    const upData = await actoresSchema.findByIdAndUpdate(id, req.body, {
        new: true
    });
    res.status(200).json(upData);
};
//delete autor

const deleteActores = async(req, res) => {
    let id = req.params.id;
    await actoresSchema.findByIdAndDelete(id)
    res.status(200).json({ messege: 'ok' })
};


module.exports = {
    getActores,
    getActor,
    addActores,
    editActores,
    deleteActores,

}