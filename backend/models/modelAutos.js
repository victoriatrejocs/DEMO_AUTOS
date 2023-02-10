const mongoose = require ("mongoose")
const autoSchema = mongoose.Schema({
    marca: {
        type: String,
        required: [true, "Escriba la marca del auto"]
    },

    modelo: {
        type: String,
        require: [true, "Escriba el modelo del auto"]
    },

    año: {
        type: Number,
        require: [true, "Escriba el año del auto"]
    },

    color: {
        type: String,
        require: [true, "Escriba el color del auto"]
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Autos", autoSchema)