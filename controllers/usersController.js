const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
    promisify
} = require('util')
exports.getLoginForm = function (req, res) {
    res.render('login')
}
const cookie = require('cookie-parser')
exports.authenticate = async function (req, res) {

    const {
        name,
        password
    } = req.body;

    try {

        const user = await usersModel.findById('600a081f193ed5d5fa2c76f2')
        if (password === user.password) {
            const token = jwt.sign({
                id: user._id
            }, 'My-Secret-key', {
                expiresIn: '1m'
            })

            //send token to the cookie
            res.cookie('token', token, {
                httpOnly: true,
                expiresIn: new Date(Date.now() + 300000)
            });
            res.redirect('/admin')


            res.json({
                status: "success",
                message: "user found!!!",
                data: {
                    token: token
                }
            });

        } else {
            res.json({
                message: 'unvalid password'
            })
        }


    } catch (err) {
        console.log(err);
    }

}


exports.validateUser = async function (req, res, next) {
    try {
        // let token;
        //getting token and check if it's here
        // if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        //     token = req.headers.authorization.split(' ')[1]
        //     console.log('token gotted');
        // }

        //get toke from cookie

        let token = req.cookies.token
        console.log(token);
        //promisify to convert the function to return a promise
        await promisify(jwt.verify)(token, 'My-Secret-key');
        next();

    } catch (error) {
        console.log(error);
    }


}