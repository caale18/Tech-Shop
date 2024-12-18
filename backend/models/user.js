const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Your password must be longer than 6 characters'],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    role: {
        type: String,
        default: 'user',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpired: Date

})

//Encriptando password antes de entrar al usuario
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})
//Compare la password del usuario
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Regresa JWT del token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });
}

// Generar token de restablecimiento de password
userSchema.methods.getResetPasswordToken = function () {
    // Generar token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Hash y configurelo para resetPasswordToken
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    // Configures el tiempo de caducidad del token
    this.resetPasswordExpired = Date.now() + 30 * 60 * 1000

    return resetToken
}

module.exports = mongoose.model('User', userSchema);