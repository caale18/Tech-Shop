import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MetaData from '../layout/MetaData';
import Loader from '../layout/Loader'; // Importa el Loader
import { register, clearErrors } from '../../actions/userActions';

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = user;

    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('/images/imagen_user.png');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error, loading, isAuthenticated } = useSelector((state) => state.auth);

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

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('password', password);
        formData.set('avatar', avatar);

        dispatch(register(formData));
    };

    const onChange = (e) => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    };

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title={'Register User'} />
                    <div className="row wrapper justify-content-center">
                        <div className="col-10 col-lg-5">
                            <form
                                className="shadow-lg p-4"
                                onSubmit={submitHandler}
                                encType="multipart/form-data"
                            >
                                <h1 className="mb-4 text-center">Registro</h1>

                                <div className="form-group">
                                    <label htmlFor="name_field">Nombre</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        name="name"
                                        value={name}
                                        onChange={onChange}
                                        placeholder="Ingresa tu nombre"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email_field">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        name="email"
                                        value={email}
                                        onChange={onChange}
                                        placeholder="Ingresa tu correo"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password_field">Contraseña</label>
                                    <input
                                        type="password"
                                        id="password_field"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={onChange}
                                        placeholder="Ingresa tu contraseña"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="avatar_upload">Avatar</label>
                                    <div className="d-flex align-items-center">
                                        <figure className="avatar mr-3 item-rtl">
                                            <img
                                                src={avatarPreview}
                                                className="rounded-circle"
                                                alt="Vista Previa del Avatar"
                                                width="50"
                                                height="50"
                                            />
                                        </figure>
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                name="avatar"
                                                className="custom-file-input"
                                                id="customFile"
                                                accept="image/*"
                                                onChange={onChange}
                                            />
                                            <label
                                                className="custom-file-label"
                                                htmlFor="customFile"
                                            >
                                                Elige un avatar
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    id="register_button"
                                    type="submit"
                                    className="btn btn-primary btn-block py-3 mt-3"
                                    disabled={loading}
                                >
                                    REGISTRARSE
                                </button>
                            </form>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Register;

