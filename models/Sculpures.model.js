const { Schema, model } = require("mongoose");

const sculptureSchema = new Schema(
    {

        product:{
            type: String,
            default:"Sculptures"
        },
        name: {
            type: String
        },


        photo: {
            type: String,
            // required: [true, 'La foto 1 es obligatoria.'],

        },

        photo2: {
            type: String,
            // required: [true, 'La foto 2 es obligatoria.'],

        },

        photo3: {
            type: String,
            // required: [true, 'La foto 3 es obligatoria.'],

        },
        height: {
            type: String,
            // required: [true, 'Las medidas son obligatorias.'],

        },

        width: {
            type: String,
            // required: [true, 'Las medidas son obligatorias.'],

        },

        prize: {
            type: String
        },

        materials: [{
            type: String
        }]

    },
    {
        timestamps: true
    }
);

const Sculpture = model("Sculpture", sculptureSchema)

module.exports = Sculpture