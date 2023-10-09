const { Schema, model } = require("mongoose");

const jewelrySchema = new Schema(
    {
        name: {
            type: String
        },

        photo: {
            type: String,
            required: [true, 'La foto es obligatoria.'],

        },

        prize: {
            type: Number
        },

        materials: [{
            type: String
        }]

    },
    {
        timestamps: true
    }
);

const Jewelry = model("Jewelry", jewelrySchema)

module.exports = Jewelry