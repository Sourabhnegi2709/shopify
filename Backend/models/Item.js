import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: { type: String,
        required: true
        },
    price: { type: Number,
        required: true
        },
    category: { type: String,
        required: true
        },
    description: { type: String

    },
    image: { type: String }, // optional: product image URL
}, { timestamps: true });

const Item = mongoose.model("Item", itemSchema);

export default Item;
