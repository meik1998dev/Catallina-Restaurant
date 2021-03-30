const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const menuRouter = require('./routes/menuRoutes')
const adminRouter = require('./routes/adminRoutes')
const usersRouter = require('./routes/usersRoutes')
const indexRouter = require('./routes/indexRoutes')
const path = require('path')
const cookieParser = require('cookie-parser')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })


//deploy pug
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

//log status to the console
app.use(logger('dev'));

//configure bodyparser to handle the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cookieParser());



//mongoose connection set up
const DB = "mongodb+srv://meik:Moh@mm@d.alok.1998@cluster0.x4zeq.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then((con) => {
    console.log("connected successfully");

}, error => {
    console.log(error, 'error');
})


app.post('/admin', upload.single('image'), function(req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})




//mount all routs to app
app.use('/menu', menuRouter);
app.use('/login', usersRouter);
app.use('/admin', adminRouter);
app.use('/', indexRouter)



var port = 3000;
app.listen(port, function() {
    console.log("Running FirstRest on Port " + port);
})