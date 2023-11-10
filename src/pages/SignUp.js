import React from 'react';
import Meta from '../components/Meta';
import BreadScumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <Meta title={'Đăng ký'} />
            <BreadScumb title={'Đăng Ký'} />
            <div className="forgotPass-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Đăng Ký</h3>
                            <form action="POST" className="d-flex flex-column gap-15">
                                <div>
                                    <input type="text" placeholder="Họ và tên" className="form-control" required />
                                </div>
                                <div className="mt-1">
                                    <input type="email" placeholder="Email" className="form-control" required />
                                </div>
                                <div className="mt-1">
                                    <input type="password" placeholder="Password" className="form-control" required />
                                </div>
                                <div className="mt-1">
                                    <input
                                        type="number"
                                        placeholder="Số điện thoại"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="mt-1">
                                    <input type="text" placeholder="Địa chỉ" className="form-control" required />
                                </div>
                                <div>
                                    <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                                        <button className="button border-0">Đăng Ký</button>
                                        <Link to={'/login'} className="button">
                                            Đăng Nhập
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

export default SignUp;
