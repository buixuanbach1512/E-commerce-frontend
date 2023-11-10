import React from 'react';
import Meta from '../components/Meta';
import BreadScumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <>
            <Meta title={'Quên Mật Khẩu'} />
            <BreadScumb title={'Quên Mật Khẩu'} />
            <div className="forgotPass-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Đặt Lại Mật Khẩu</h3>
                            <p className="text-center mt-2 mb-3">Chúng tôi sẽ gửi mật khẩu mới của bạn qua email</p>
                            <form action="POST" className="d-flex flex-column gap-15">
                                <div>
                                    <input type="email" placeholder="Email" className="form-control" />
                                </div>
                                <div>
                                    <div className=" mt-3 d-flex justify-content-center flex-column align-items-center gap-15">
                                        <button className="button border-0" type="submit">
                                            Gửi
                                        </button>
                                        <Link className="text-dark" to={'/login'}>
                                            Hủy
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

export default ForgotPassword;
