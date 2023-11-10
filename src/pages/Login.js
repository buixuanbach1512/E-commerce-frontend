import React from 'react';
import Meta from '../components/Meta';
import BreadScumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Meta title={'Đăng Nhập'} />
            <BreadScumb title={'Đăng nhập'} />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Đăng Nhập</h3>
                            <form action="POST" className="d-flex flex-column gap-15">
                                <div>
                                    <input type="email" placeholder="Email" className="form-control" />
                                </div>
                                <div className="mt-1">
                                    <input type="password" placeholder="Password" className="form-control" />
                                </div>
                                <div>
                                    <Link className="text-dark" to={'/forgot-password'}>
                                        Quên mật khẩu?
                                    </Link>
                                    <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                                        <button className="button border-0">Đăng Nhập</button>
                                        <Link to={'/signup'} className="button">
                                            Đăng Ký
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
