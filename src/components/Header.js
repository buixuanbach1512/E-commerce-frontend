import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
    return (
        <>
            <header className="header-top py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">Miễn phí vận chuyển hóa đơn trên 1 triệu đồng</p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Hotline:{' '}
                                <a className="text-white" href="tel: +84 981736892">
                                    +84 981736892
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className="text-white">B SHOP</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Tìm Kiếm Sản Phẩm ..."
                                    aria-label="Tìm Kiếm Sản Phẩm ..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className="fs-6" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <img src="images/compare.svg" alt="compare" />
                                        <p className="mb-0 header-upper-text">
                                            So Sánh
                                            <br />
                                            Sản Phẩm
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <img src="images/wishlist.svg" alt="wishlist" />
                                        <p className="mb-0 header-upper-text">
                                            Danh sách
                                            <br />
                                            Yêu thích
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <img src="images/user.svg" alt="user" />
                                        <p className="mb-0 header-upper-text">
                                            Đăng Nhập
                                            <br />
                                            Tài Khoản Của Tôi
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <img src="images/cart.svg" alt="cart" />
                                        <div className="d-flex flex-column gap-10">
                                            <span className="badge bg-white text-dark">0</span>
                                            <p className="mb-0 header-upper-text">
                                                0 <sup>đ</sup>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="me-5 d-inline-block">Danh Mục Sản Phẩm</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <Link className="dropdown-item text-white" to="">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="">
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/store">Cửa Hàng</NavLink>
                                        <NavLink to="/">Blogs</NavLink>
                                        <NavLink to="/contact">Liên Hệ</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;