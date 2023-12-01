import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
import { IoHeartOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../features/category/categorySlice';
import { logout } from '../features/auth/authSlice';

const Header = () => {
    const dispatch = useDispatch();
    const customer = sessionStorage.getItem('customer') ? JSON.parse(sessionStorage.getItem('customer')) : null;
    const [navMenu, setnavMenu] = useState(false);
    const categoryState = useSelector((state) => state.category.categories);
    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch]);

    const logoutUser = () => {
        dispatch(logout());
    };
    return (
        <>
            <header className="header-top py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">Miễn phí vận chuyển toàn quốc</p>
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
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-3">
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
                        <div className="col-4">
                            <div className="header-upper-links d-flex align-items-center justify-content-end gap-15">
                                <div className="nav-links">
                                    <Link
                                        className="d-flex align-items-center gap-10 text-white"
                                        to={customer !== null ? '/wishlist' : ''}
                                    >
                                        <IoHeartOutline className="header-icon" />
                                        <p className="mb-0 header-upper-text">
                                            Danh sách
                                            <br />
                                            Yêu thích
                                        </p>
                                    </Link>
                                </div>
                                <div className="nav-links">
                                    {customer !== null ? (
                                        <button
                                            className="d-flex align-items-center gap-10 text-white bg-transparent border-0"
                                            onClick={() => logoutUser()}
                                        >
                                            <CiUser className="header-icon" />
                                            <p className="mb-0 header-upper-text">
                                                {customer.name}
                                                <br />
                                                Đăng Xuất
                                            </p>
                                        </button>
                                    ) : (
                                        <Link className="d-flex align-items-center gap-10 text-white" to="/login">
                                            <CiUser className="header-icon" />
                                            <p className="mb-0 header-upper-text">
                                                Đăng nhập
                                                <br />
                                                Tài Khoản Của Tôi
                                            </p>
                                        </Link>
                                    )}
                                </div>
                                <div>
                                    <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                                        <IoCartOutline className="header-icon cart-icon" />
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
                <div className="container">
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
                                            {categoryState?.map((item) => (
                                                <li key={item._id}>
                                                    <Link className="dropdown-item text-white" to="">
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <Link to="/">Home</Link>
                                        <Link to="/store">Cửa Hàng</Link>
                                        <Link to="/">Blogs</Link>
                                        <Link to="/contact">Liên Hệ</Link>
                                    </div>
                                </div>
                                <FaBars className="nav-button" onClick={() => setnavMenu(true)} />
                                <div className={`nav-overlay ${navMenu ? '' : 'd-none'} `}></div>
                                <div
                                    className="menu-mobile-links"
                                    style={{ transform: `translateX(${navMenu ? '0' : '100%'})` }}
                                >
                                    <FaTimes className="nav-close" onClick={() => setnavMenu(false)} />
                                    <ul className="nav-list">
                                        <li>
                                            <Link className="nav-item">Home</Link>
                                        </li>
                                        <li>
                                            <Link className="nav-item">Cửa Hàng</Link>
                                        </li>
                                        <li>
                                            <Link className="nav-item">Blogs</Link>
                                        </li>
                                        <li>
                                            <Link className="nav-item">Liên Hệ</Link>
                                        </li>
                                    </ul>
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
