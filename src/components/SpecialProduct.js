import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const SpecialProduct = (props) => {
    const { item } = props;
    return (
        <div key={item._id} className="col-6 mb-3">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div className="special-product-image">
                        <Link to={`/product/${item._id}`}>
                            <img className="img-fluid" src="images/watch.jpg" alt="watch" />
                        </Link>
                    </div>
                    <div className="special-product-content">
                        <h5 className="brand">{item.brand.name}</h5>
                        <h6 className="title">{item.name}</h6>
                        <ReactStars count={5} size={24} value={item.totalRating} edit={false} activeColor="#ffd700" />
                        <p className="price">
                            <span className="red-p">
                                {item.price}
                                <sup>đ</sup>
                            </span>
                            &nbsp;
                            {/* <strike>
                                        150.000<sup>đ</sup>
                                    </strike> */}
                        </p>
                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className="mb-0">
                                <b>5 </b>ngày
                            </p>
                            <div className="d-flex gap-5 align-items-center">
                                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                                <span className="badge rounded-circle p-3 bg-danger">1</span>
                            </div>
                        </div>
                        <div className="prod-count my-3">
                            <p>{item.quantity} Sản Phẩm</p>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-label="Basic example"
                                    style={{ width: (item.quantity / (item.quantity + item.sold)) * 100 + '%' }}
                                    aria-valuenow={item.quantity / (item.quantity + item.sold)}
                                    aria-valuemin={item.quantity}
                                    aria-valuemax={item.sold + item.quantity}
                                ></div>
                            </div>
                        </div>
                        <Link to={`/product/${item._id}`} className="button">
                            Xem sản phẩm
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;
