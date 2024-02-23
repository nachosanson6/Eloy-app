
const { Schema, model } = require("mongoose");

const sculptureSchema = new Schema(
    {
        product: {
            type: String,
            default: "Sculptures"
        },
        name: {
            type: String
        },
        photo: {
            type: String,
            required: [true, 'La foto es obligatoria.'],
        },
        photo2: {
            type: String,
        },
        photo3: {
            type: String,
        },

        materials: [{
            type: String
        }],
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

        },

        sold: {
            type: Boolean
        }
    },
    {
        timestamps: true
    }
);

const Sculpture = model("Sculpture", sculptureSchema);

module.exports = Sculpture;