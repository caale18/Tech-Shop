import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MetaData from '../layout/MetaData';
import Loader from '../layout/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearErrors } from '../../actions/userActions';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error, loading, isAuthenticated } = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }

        if (error) {
            dispatch(clearErrors());
        }
    }, [dispatch, error, isAuthenticated, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title={'Login'} />
                    <div className="row wrapper justify-content-center">
                        <div className="col-10 col-lg-5">
                            <form className="shadow-lg p-4" onSubmit={submitHandler}>
                                <h1 className="mb-4 text-center">Iniciar Sesión</h1>
                                <div className="form-group">
                                    <label htmlFor="email_field">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        placeholder="Ingresa tu correo"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password_field">Contraseña</label>
                                    <input
                                        type="password"
                                        id="password_field"
                                        className="form-control"
                                        placeholder="Ingresa tu contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to="/password/forgot" className="text-decoration-none">
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                </div>

                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-primary btn-block py-3 mt-3"
                                >
                                    INICIAR SESIÓN
                                </button>

                                <div className="mt-4 text-center">
                                    <span>¿Nuevo usuario? </span>
                                    <Link to="/register" className="text-decoration-none">
                                        Regístrate aquí
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Login;


