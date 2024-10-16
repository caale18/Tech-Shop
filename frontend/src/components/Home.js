import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import MetaData from './layout/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, clearErrors } from '../actions/productActions';
import Product from './product/Product';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { keyword } = useParams(); // Obtener el parámetro 'keyword' de la URL
    const dispatch = useDispatch();

    const { products, loading, error, productsCount, resPerPage } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts(keyword, currentPage));

        // Limpiar errores si existen
        return () => {
            if (error) {
                dispatch(clearErrors());
            }
        };
    }, [dispatch, error, keyword, currentPage]);

    const setCurrentPageNo = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Fragment>
            <MetaData title={'Compra los mejores productos en línea'} />
            <h1 id="products_heading" className="mb-4">Últimos Productos ({productsCount})</h1>

            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            ) : error ? (
                <div className="alert alert-danger text-center">{error}</div>
            ) : (
                <section id="products" className="container mt-5">
                    <div className="row">
                        {products.length > 0 ? (
                            products.map(product => (
                                <Product key={product._id} product={product} />
                            ))
                        ) : (
                            <div className="col-12">
                                <p className="text-center">No hay productos disponibles.</p>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {resPerPage <= productsCount && (
                <div className='d-flex justify-content-center mt-5'>
                    <Pagination 
                        activePage={currentPage}
                        itemsCountPerPage={resPerPage}
                        totalItemsCount={productsCount}
                        onChange={setCurrentPageNo}
                        nextPageText={'⟩'}
                        prevPageText={'⟨'}
                        firstPageText={'«'}
                        lastPageText={'»'}
                        itemClass='page-item'
                        linkClass='page-link'
                    />
                </div>
            )}
        </Fragment>
    );
};

export default Home;

