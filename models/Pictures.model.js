const { Schema, model } = require("mongoose");

const pictureSchema = new Schema(
    {
        name: {
            type: String
        },

        photo: {
            type: String,
            required: [true, 'La foto es obligatoria.'],

        },
        height: {
            type: String,
            required: [true, 'Las medidas son obligatorias.'],

        },

        width: {
            type: String,
            required: [true, 'Las medidas son obligatorias.'],

        },

        prize: {
            type: String
        },

        colors: [{
            type: String
        }]

    },
    {
        timestamps: true
    }
);

const Picture = model("Picture", pictureSchema)

module.exports = Picture