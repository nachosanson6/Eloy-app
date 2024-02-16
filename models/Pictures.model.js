const { Schema, model } = require("mongoose");

const pictureSchema = new Schema(
    {
        product: {
            type: String,
            default: "Pictures"
        },

        name: {
            type: String
        },

        photo: {
            type: String,
            required: [true, 'La foto es obligatoria.'],

        },
        height: {
            type: String,
            required: [true, 'La altura es obligatoria.'],

        },

        width: {
            type: String,
            required: [true, 'La anchura es obligatoria.'],

        },

        prize: {
            type: String,
            required: [true, 'El precio es obligatorio.'],

        },

        colors: [{
            type: String
        }],

        materials: [{
            type: String,
            required: [true, 'Los materiales son obligatorios.'],
        }],

        sold: {
            type: Boolean
        }

    },
    {
        timestamps: true
    }
);

const Picture = model("Picture", pictureSchema)

module.exports = Picture