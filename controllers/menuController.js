const Menu = require('../models/menuModel');

exports.getMenu = async function(req, res) {

    try {
        //get data from model
        const menu = await Menu.find();

        res.status(200).render('test', {
            menu
        })

    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: "fail",
            message: err
        })
    }

}