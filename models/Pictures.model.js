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
            // required: [true, 'La foto es obligatoria.'],

        },
        height: {
            type: String,


        },

        width: {
            type: String,


        },

        prize: {
            type: String
        },

        colors: [{
            type: String
        }],

        materials: [{
            type: String
        }]

    },
    {
        timestamps: true
    }
);

const Picture = model("Picture", pictureSchema)

module.exports = Picture