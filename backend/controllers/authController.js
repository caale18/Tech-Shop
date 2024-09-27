const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');

//Registrar un usuario => /api/v1/register
exports.registerUser = catchAsyncErrors( async (req, res, next) => {

    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: '',
            url: ''
        }
    })

    sendToken(user, 200, res);
})

//Login User => /a[i/v1/login
exports.loginUser = catchAsyncErrors( async(req, res, next) => {
    const {email, password } = req.body;

    // Verificar si el correo y la password son ingresados por el user
    if(!email || !password) {
        return next(new ErrorHandler('Ingrese el correo y la password', 400))
    }

    //Usuario que busca en la base de datos\
    const user = await User.findOne({ email }).select('+password')

    if(!user) {
        return next(new ErrorHandler('El email o password no son validos', 401));
    }

    //Comprueba si la password es correcta o no
    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched) {
        return next(new ErrorHandler('El email o password no son validos', 401));
    }

    sendToken(user, 200, res);
})

