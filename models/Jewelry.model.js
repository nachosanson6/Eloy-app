const { Schema, model } = require("mongoose");

const jewelrySchema = new Schema(
    {

        product: {
            type: String,
            default: "Jewelry"
        },

        name: {
            type: String
        },

        photo: {
            type: String,
            required: [true, 'La foto es obligatoria.'],

        },

        prize: {
            type: String,

        },

        materials: [{
            type: String
        }],

        sold: {
            type: Boolean
        }

    },
    {
        timestamps: true
    }
);

const Jewelry = model("Jewelry", jewelrySchema)

module.exports = Jewelry