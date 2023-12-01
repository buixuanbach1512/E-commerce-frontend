import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';

const Checkout = () => {
    return (
        <>
            <Meta title={'Check Out'} />
            <BreadCrumb title="Check Out" />
            <section className="checkout-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <h3 className="website-name">B-SHOP</h3>
                            <nav aria-label="breadcrumb" className="py-3">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link className="ck-link" to="/">
                                            Giỏ hàng
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Check out
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Vận chuyển
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Thanh toán
                                    </li>
                                </ol>
                            </nav>
                            <h4 className="title">Thông tin liên lạc</h4>
                            <p className="user-details">Bùi Xuân Bách (buixuanbach102@gmail.com)</p>
                            <form className="d-flex flex-wrap gap-15 justify-content-between">
                                <div className="w-100">
                                    <select className="form-control form-select">
                                        <option value="">Chọn quốc gia</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Họ (Tên đệm)" className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Tên" className="form-control" />
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder="Địa chỉ" className="form-control" />
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder="Số nhà" className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Thành phố" className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <select className="form-control form-select">
                                        <option value="">Chọn quốc gia</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Zip code" className="form-control" />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link className="ck-link d-flex gap-10 align-align-items-center" to="/cart">
                                            <IoMdArrowBack />
                                            Trở về giỏ hàng
                                        </Link>
                                        <Link className="button" to="/cart">
                                            Tiếp tục mua sắm
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-5">
                            <div className="border-bottom py-4">
                                <div className="d-flex gap-10 align-items-center">
                                    <div className="w-75 d-flex gap-10">
                                        <div className="w-25 position-relative">
                                            <span
                                                style={{ top: -5, right: 2 }}
                                                className="badge bg-secondary text-white rounded-circle position-absolute"
                                            >
                                                1
                                            </span>
                                            <img className="img-fluid" src="images/watch.jpg" alt="" />
                                        </div>
                                        <div>
                                            <h5 className="title">Áo thun 1</h5>
                                            <p>#jdkkksd</p>
                                        </div>
                                    </div>

                                    <div className="flex-grow-1 text-end">
                                        <h5>
                                            100.000<sup>đ</sup>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom py-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Tổng đơn hàng</p>
                                    <p>
                                        100.000<sup>đ</sup>
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-0">Vận chuyển</p>
                                    <p className="mb-0">
                                        10.000<sup>đ</sup>
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-4">
                                <h4>Tổng tiền</h4>
                                <h5 className="total-price">
                                    110.000<sup>đ</sup>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Checkout;
