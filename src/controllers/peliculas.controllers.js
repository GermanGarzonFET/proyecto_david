import PeliculasShema from '../models/peliculas.model';

const getPeliculas = async(req, res) => {
    const data = await PeliculasShema.find();
    res.status(200).json(data);

};
const getPelicula = async(req, res) => {
    let id = req.params.id;
    const data = await PeliculasShema.findById(id);
    res.status(200).json(data);

};

const addPeliculas = async(req, res) => {
    let { nombre,descripcion,img,triller,fecha_estreno  } = req.body;
    const newLibro = new PeliculasShema({
        nombre,
        descripcion,
        img,triller,
        fecha_estreno
    })
    const saveLibro = await newLibro.save();
    res.status(200).json(saveLibro);
};


const editPelicula = async(req, res) => {
    let id = req.params.id;
    const upData = await PeliculasShema.findByIdAndUpdate(id, req.body, {
        new: true
    });

    res.status(200).json(upData);
}

const deletePelicula = async(req, res) => {
    let id = req.params.id;
    await PeliculasShema.findByIdAndDelete(id);
    res.status(200).json({ message: "ok" });
}



module.exports = {
    getPeliculas,
    getPelicula,
    addPeliculas,
    editPelicula,
    deletePelicula
}