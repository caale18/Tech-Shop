const Product = require('../models/product')

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')

// Crear nuevo producto => /app/v1/admin/product/new
exports.newProduct = catchAsyncErrors ( async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
})


//Obtener todos los productos => /api/v1/products?keyword=laptop
exports.getProducts = catchAsyncErrors ( async (req, res, next) => {

    const resPerPage = 4;
    const productCount = await Product.countDocuments()

    const apiFeatures = new APIFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resPerPage)

    const products = await apiFeatures.query;


    res.status(200).json({
        success: true,
        count: products.length,
        productCount,
        products
    })
})

//Obtener detalles de un solo producto => /api/v1/product/:id

exports.getSingleProduct = catchAsyncErrors ( async (req, res, next) => {

    const product = await Product.findById(req.params.id)

    if(!product) {
        return next(new ErrorHandler('Producto no encontrado', 404));
    }
    
    res.status(200).json({
        success: true,
        product
    })
})

//Actualizar nuestro producto => /api/v1/admin/product/:id
exports.updateProduct = catchAsyncErrors ( async (req, res, next) => {

    let product = await Product.findById(req.params.id)

    if(!product) {
        return next(new ErrorHandler('Producto no encontrado', 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })
})

//Eliminar el producto => /api/v1/admin/product/:id
exports.deleteProduct = catchAsyncErrors ( async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler('Producto no encontrado', 404));
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: 'Producto es eliminado'
    })
})