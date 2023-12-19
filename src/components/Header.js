import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
import { IoHeartOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../features/category/categorySlice';
import { getCart } from '../features/auth/authSlice';

const Header = () => {
    const user = sessionStorage.getItem('customer');
    const dispatch = useDispatch();
    const [navMenu, setnavMenu] = useState(false);
    const [totalPrice, setTotalPrice] = useState(null);
    const [cartQuantity, setCartQuantity] = useState(0);

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');

    const authState = useSelector((state) => state.auth);
    const categoryState = useSelector((state) => state.category.categories);
    const cartState = useSelector((state) => state.auth.cart);
    const allProductState = useSelector((state) => state.product.products);
    useEffect(() => {
        dispatch(getAllCategory());
        if (user) {
            dispatch(getCart());
        }
    }, [dispatch, user]);

    useEffect(() => {
        let count = 0;
        let sum = 0;
        for (let i = 0; i < cartState.length; i++) {
            sum = sum + Number(cartState[i].price * cartState[i].quantity);
            count = count + 1;
            setTotalPrice(sum);
            setCartQuantity(count);
        }
        if (cartState.length === 0) {
            setTotalPrice(sum);
            setCartQuantity(count);
        }
    }, [cartState]);

    const handleLogout = () => {
        sessionStorage.clear();
        window.location.reload();
    };

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = allProductState?.filter((value) => {
            return value.name
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ/g, 'd')
                .replace(/Đ/g, 'D')
                .includes(
                    searchWord
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .replace(/đ/g, 'd')
                        .replace(/Đ/g, 'D'),
                );
        });
        setFilteredData(newFilter);

        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
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
                                <Link to="/" className="text-white">
                                    B SHOP
                                </Link>
                            </h2>
                        </div>
                        <div className="col-5 position-relative">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2 input-search border-0"
                                    placeholder="Tìm Kiếm Sản Phẩm ..."
                                    aria-label="Tìm Kiếm Sản Phẩm ..."
                                    aria-describedby="basic-addon2"
                                    onChange={handleFilter}
                                    value={wordEntered}
                                />

                                {filteredData.length === 0 ? (
                                    <span className="input-group-text p-3 icon-search" id="basic-addon2">
                                        <BsSearch className="fs-6" />
                                    </span>
                                ) : (
                                    <span
                                        className="input-group-text p-3 icon-search"
                                        id="basic-addon2"
                                        onClick={clearInput}
                                    >
                                        <IoClose className="fs-6" />
                                    </span>
                                )}
                            </div>
                            {filteredData?.length !== 0 && (
                                <div className="data-result position-absolute">
                                    {filteredData.map((item, index) => (
                                        <Link to={`/product/${item?._id}`} key={index} className="data-item">
                                            <p>{item?.name}</p>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="col-4">
                            <div className="header-upper-links d-flex align-items-center justify-content-end">
                                <div className="nav-links">
                                    <Link className="d-flex align-items-center gap-10 text-white" to="/wishlist">
                                        <IoHeartOutline className="header-icon" />
                                        <p className="mb-0 header-upper-text">
                                            Danh sách
                                            <br />
                                            Yêu thích
                                        </p>
                                    </Link>
                                </div>
                                <div className="nav-links">
                                    {authState && authState.user !== null ? (
                                        <div className="btn-group">
                                            <button
                                                className="btn dropdown-toggle d-flex align-items-center gap-10 text-white bg-transparent border-0"
                                                type="button"
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <CiUser className="header-icon" />
                                                <p className="mb-0 header-upper-text">
                                                    Chào mừng
                                                    <br />
                                                    {authState && authState.user.name}
                                                </p>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <Link
                                                        className="dropdown-item text-dark"
                                                        to={`/my-profile/${authState.user._id}`}
                                                    >
                                                        Thông tin cá nhân
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/change-password" className="dropdown-item text-dark">
                                                        Đổi mật khẩu
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item text-dark"
                                                        onClick={() => handleLogout()}
                                                    >
                                                        Đăng xuất
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
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
                                            <div>
                                                <span className="badge bg-white text-dark">
                                                    {cartQuantity ? cartQuantity : 0}
                                                </span>
                                            </div>
                                            <p className="header-price mb-0 header-upper-text">
                                                {totalPrice ? totalPrice.toLocaleString('vi') : 0} <sup>đ</sup>
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
                                            className="btn dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="me-5 d-inline-block">Danh Mục Sản Phẩm</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            {categoryState?.map((item, index) => (
                                                <li key={index}>
                                                    <Link
                                                        className="dropdown-item text-white"
                                                        to={`/store?category=${item._id}`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Trang chủ</NavLink>
                                        <NavLink to="/store">Cửa Hàng</NavLink>
                                        <NavLink to="/blog">Blogs</NavLink>
                                        <NavLink to="/contact">Liên Hệ</NavLink>
                                        <NavLink to="/order">Đơn hàng</NavLink>
                                    </div>
                                </div>
                                <FaBars className="nav-button" onClick={() => setnavMenu(true)} />
                                <div className={`nav-overlay ${navMenu ? '' : 'd-none'} `}></div>
                                <div
                                    className="menu-mobile-links"
                                    style={{ transform: `translateX(${navMenu ? '0' : '100%'})` }}
                                >
                                    <FaTimes className="nav-close" onClick={() => setnavMenu(false)} />
                                    <div className="py-3">
                                        <ul className="nav-list">
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/">
                                                    Trang chủ
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/store">
                                                    Cửa Hàng
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/contact">
                                                    Liên Hệ
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/wishlist">
                                                    Danh sách yêu thích
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/order">
                                                    Đơn hàng
                                                </NavLink>
                                            </li>
                                            {authState && authState.user !== null ? (
                                                <>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link">
                                                            Chào mừng: {authState.user.name}
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link"
                                                            to={`/my-profile/${authState.user._id}`}
                                                        >
                                                            Thông tin cá nhân
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" onClick={() => handleLogout()}>
                                                            Đăng xuất
                                                        </NavLink>
                                                    </li>
                                                </>
                                            ) : (
                                                <li className="nav-item">
                                                    <NavLink to="/login">Đăng nhập</NavLink>
                                                </li>
                                            )}
                                        </ul>
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
