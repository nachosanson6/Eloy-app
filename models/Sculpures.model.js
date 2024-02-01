
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
        },
        // ... otros campos
        materials: [{
            type: String
        }]
    },
    {
        timestamps: true
    }
);

const Sculpture = model("Sculpture", sculptureSchema);

module.exports = Sculpture;