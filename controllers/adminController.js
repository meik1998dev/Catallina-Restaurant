const Menu = require('../models/menuModel');
var express = require('express')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var app = express()


exports.getMenu = async function(req, res) {
    try {

        //get data from model
        const menu = await Menu.find();

        res.status(200).render('admin', {
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


exports.add = async function(req, res) {

    try {

        //get data entered from body
        const name = req.body.name
        const price = req.body.price
        const kind = req.body.option
        const integradiants = req.body.integradiants

        //create document with data gotten from body
        const newElement = await Menu.create({
            name,
            price,
            kind,
            integradiants
        })

        //save the created doc to db
        newElement.save()

        res.redirect('/admin')


    } catch (err) {
        console.log(err);
    }

}
exports.deleteItem = async function(req, res) {
    try {

        //get id from paramaters of the link
        const paramId = req.params.id

        await Menu.findByIdAndRemove(paramId)

        res.redirect('/admin')

    } catch (err) {
        console.log(err);

    }
}