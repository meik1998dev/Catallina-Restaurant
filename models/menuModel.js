let mongoose = require('mongoose');

let menuSchema = new mongoose.Schema({


    name: String,
    price: String,
    kind: String,
    integradiants: String,
    img: {
        data: Buffer,
        contentType: String

    }
    // salads: {
    //     type: String,
    //     required: true
    // },
    // sandwiches: {
    //     type: String,
    //     required: true
    // },
    // drinks: {
    //     type: String,
    //     required: true
    // },
    // created_at: {
    //     type: Date,
    //     default: Date.now
    // }
})

// Export Meal Model
//When you call mongoose.model() on a schema, Mongoose compiles a model for you
//The first argument is the singular name of the collection your model is for.
let Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;