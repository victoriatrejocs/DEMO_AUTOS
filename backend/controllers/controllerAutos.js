const Auto = require("../models/modelAutos")

const getAuto = (req, res) => {
    res.status(200).json({message: "Autos"})
    if (!Auto){
        res.status(400).json({message: "Auto no encontrado"})
    }
}

const setAuto = (req, res) => {
    res.status(200).json({message: "Auto creado"})
    if (!Auto){
        res.status(400).json({message: "Auto no creado"})
    }
}

const updateAuto = (req, res) => {
    res.status(200).json({message: `Auto ${req.params.id} updated`})
    if (!req.params.id){
        res.status(400).json({message: "Auto no actualizado"})
    }
}

const deleteAuto = (req, res) => {
    res.status(200).json({message: `Auto ${req.params.id} deleted`})
    if (!req.params.id){
        res.status(400).json({message: "Auto no eliminado"})
    }
}

module.exports = {
    getAuto,
    setAuto,
    updateAuto,
    deleteAuto
}