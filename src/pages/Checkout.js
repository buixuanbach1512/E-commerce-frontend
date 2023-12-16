import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { countryOptions } from '../components/ListCountry';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createOrder, emptyCart, resetState } from '../features/auth/authSlice';
import Paypal from '../components/PayPal';
import Confetticp from '../components/Confetticp';

const schema = Yup.object().shape({
    firstName: Yup.string().required('Chưa nhập họ !!'),
    lastName: Yup.string().required('Chưa nhập tên !!'),
    address: Yup.string().required('Chưa nhập địa chỉ !!'),
    province: Yup.string().required('Chưa nhập tỉnh thành !!'),
    country: Yup.string().required('Chưa nhập quốc gia !!'),
    other: Yup.string().required('Chưa nhập số nhà !!'),
    zipCode: Yup.number().required('Chưa nhập Zip code !!'),
});

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(null);
    const [shippingInfo, setShippingInfo] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [payment, setPayment] = useState(false);
    const [checkedCOD, setCheckedCOD] = useState(false);
    const [checkedPayPal, setCheckedPayPal] = useState(false);
    const cartState = useSelector((state) => state.auth.cart);
    const userState = useSelector((state) => state.auth.user);
    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < cartState.length; i++) {
            sum = sum + Number(cartState[i].price * cartState[i].quantity);
            setTotalPrice(sum);
        }
    }, [cartState]);
    useEffect(() => {
        let items = [];
        for (let i = 0; i < cartState.length; i++) {
            items.push({
                product: cartState[i].prodId._id,
                color: cartState[i].color._id,
                quantity: cartState[i].quantity,
                price: cartState[i].price * cartState[i].quantity,
            });
        }
        setOrderItems(items);
    }, [cartState]);
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            address: '',
            other: '',
            province: '',
            country: '',
            zipCode: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            setShippingInfo(values);
            setPayment(true);
        },
    });
    const handleCheckCOD = () => {
        setCheckedCOD(!checkedCOD);
    };
    const handleCheckPayPal = () => {
        setCheckedPayPal(!checkedPayPal);
    };
    const placeOrder = () => {
        dispatch(
            createOrder({
                shippingInfo,
                orderItems,
                totalPrice,
                totalPriceAfterDiscount: totalPrice,
                payment: 'Thanh toán khi giao hàng',
            }),
        );
        setTimeout(() => {
            dispatch(emptyCart());
            dispatch(resetState());
            navigate('/order');
        }, 1000);
    };
    return (
        <>
            <Meta title={'Check Out'} />
            <BreadCrumb title="Check Out" />
            <section className="checkout-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        {isSuccess && <Confetticp />}
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
                            <p className="user-details">
                                {userState?.name} ({userState?.email})
                            </p>
                            <form
                                onSubmit={formik.handleSubmit}
                                className="d-flex flex-wrap gap-15 justify-content-between border-bottom py-3"
                            >
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="Họ (Tên đệm)"
                                        className="form-control"
                                        onChange={formik.handleChange('firstName')}
                                        onBlur={formik.handleBlur('firstName')}
                                        value={formik.values.firstName}
                                    />
                                    <div className="input-err ms-2 my-1 text-danger">
                                        {formik.touched.firstName && formik.errors.firstName}
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="Tên"
                                        className="form-control"
                                        onChange={formik.handleChange('lastName')}
                                        onBlur={formik.handleBlur('lastName')}
                                        value={formik.values.lastName}
                                    />
                                    <div className="input-err ms-2 my-1 text-danger">
                                        {formik.touched.lastName && formik.errors.lastName}
                                    </div>
                                </div>
                                <div className="w-100">
                                    <input
                                        type="text"
                                        placeholder="Địa chỉ"
                                        className="form-control"
                                        onChange={formik.handleChange('address')}
                                        onBlur={formik.handleBlur('address')}
                                        value={formik.values.address}
                                    />
                                    <div className="input-err ms-2 my-1 text-danger">
                                        {formik.touched.address && formik.errors.address}
                                    </div>
                                </div>
                                <div className="w-100">
                                    <input
                                        type="text"
                                        placeholder="Số nhà"
                                        className="form-control"
                                        onChange={formik.handleChange('other')}
                                        onBlur={formik.handleBlur('other')}
                                        value={formik.values.other}
                                    />
                                    <div className="input-err ms-2 my-1 text-danger">
                                        {formik.touched.other && formik.errors.other}
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="Tỉnh (Thành phố)"
                                        className="form-control"
                                        onChange={formik.handleChange('province')}
                                        onBlur={formik.handleBlur('province')}
                                        value={formik.values.province}
                                    />
                                    <div className="input-err ms-2 my-1 text-danger">
                                        {formik.touched.province && formik.errors.province}
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <select
                                        className="form-control form-select"
                                        onChange={formik.handleChange('country')}
                                        onBlur={formik.handleBlur('country')}
                                        value={formik.values.country}
                                    >
                                        <option value="">Chọn quốc gia</option>
                                        {countryOptions.map((item, index) => (
                                            <option key={index} value={item.value}>
                                                {item.label}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="input-err ms-2 my-1 text-danger">
                                        {formik.touched.country && formik.errors.country}
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="Zip code"
                                        className="form-control"
                                        onChange={formik.handleChange('zipCode')}
                                        onBlur={formik.handleBlur('zipCode')}
                                        value={formik.values.zipCode}
                                    />
                                    <div className="input-err ms-2 my-1 text-danger">
                                        {formik.touched.zipCode && formik.errors.zipCode}
                                    </div>
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link className="ck-link d-flex gap-10 align-align-items-center" to="/cart">
                                            <IoMdArrowBack />
                                            Trở về giỏ hàng
                                        </Link>
                                        {!payment && (
                                            <button type="submit" className="button border-0">
                                                Tiếp tục mua sắm
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </form>
                            {payment && (
                                <div className="py-4">
                                    <h4 className="title">Phương thức thanh toán</h4>
                                    <div className="row mt-5">
                                        <div className="col-12 mb-3 border-bottom">
                                            <div className=" d-flex align-items-center gap-5 mb-3 ">
                                                <input
                                                    type="checkbox"
                                                    id="payment-checkbox1"
                                                    onClick={handleCheckCOD}
                                                />
                                                <label htmlFor="payment-checkbox1">
                                                    COD - Thanh toán khi giao hàng
                                                </label>
                                            </div>

                                            {checkedCOD && (
                                                <button
                                                    type="button"
                                                    className=" button w-100 p-4 rounded-3 border-0 mb-2"
                                                    onClick={() => placeOrder()}
                                                >
                                                    Đặt hàng
                                                </button>
                                            )}
                                        </div>
                                        <div className="col-12 border-bottom">
                                            <div className=" d-flex align-items-center gap-5 mb-3">
                                                <input
                                                    type="checkbox"
                                                    id="payment-checkbox2"
                                                    onClick={handleCheckPayPal}
                                                />
                                                <label htmlFor="payment-checkbox2">Thanh toán qua PayPal</label>
                                            </div>
                                            {checkedPayPal && (
                                                <Paypal
                                                    setIsSuccess={setIsSuccess}
                                                    payload={{
                                                        shippingInfo,
                                                        orderItems,
                                                        totalPrice,
                                                        totalPriceAfterDiscount: totalPrice,
                                                    }}
                                                    amount={Math.round((totalPrice + 10000) / 23500)}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-5">
                            <div className="border-bottom py-4">
                                {cartState &&
                                    cartState?.map((item, index) => (
                                        <div key={index} className="d-flex mb-4 gap-10 align-items-center">
                                            <div className="w-75 d-flex gap-10">
                                                <div className="w-25 position-relative">
                                                    <span
                                                        style={{ top: -5, right: 2 }}
                                                        className="badge bg-secondary text-white rounded-circle position-absolute"
                                                    >
                                                        {item?.quantity}
                                                    </span>
                                                    <img className="img-fluid" src={item.prodId.images[0].url} alt="" />
                                                </div>
                                                <div>
                                                    <h5 className="title">{item.prodId.name}</h5>

                                                    <ul className="colors ps-0">
                                                        <li style={{ background: item.color.name }}></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="flex-grow-1 text-end">
                                                <h5>
                                                    {(item.price * item.quantity).toLocaleString('vi')}
                                                    <sup>đ</sup>
                                                </h5>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <div className="border-bottom py-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Tổng đơn hàng</p>
                                    <p>
                                        {totalPrice ? totalPrice.toLocaleString('vi') : 0}
                                        <sup>đ</sup>
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
                                    {totalPrice ? (totalPrice + 10000).toLocaleString('vi') : 0}
                                    <sup>đ</sup>
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
