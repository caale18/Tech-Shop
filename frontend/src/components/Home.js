import React, { Fragment, useEffect } from 'react';
import MetaData from './layout/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, clearErrors } from '../actions/productActions';
import Product from './product/Product';

const Home = () => {
    const dispatch = useDispatch();

    const { products, loading, error, productsCount } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());

        // Limpiar errores si existen
        return () => {
            if (error) {
                dispatch(clearErrors());
            }
        };
    }, [dispatch, error]);

    return (
        <Fragment>
            <MetaData title={'Compra los mejores productos en línea'} />
            <h1 id="products_heading" className="mb-4">Últimos Productos ({productsCount})</h1>

            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                </div>
            ) : error ? (
                <div className="alert alert-danger text-center">{error}</div>
            ) : (
                <section id="products" className="container mt-5">
                    <div className="row">
                        {products.length > 0 ? (
                            products.map(product => (
                                <Product key={product._id} product={product}/>
                            ))
                        ) : (
                            <div className="col-12">
                                <p className="text-center">No hay productos disponibles.</p>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </Fragment>
    );
};

export default Home;
