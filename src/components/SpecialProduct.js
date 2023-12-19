import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const SpecialProduct = (props) => {
    const { item } = props;
    return (
        <div key={item._id} className="col-xl-6 mb-3">
            <div className="special-product-card">
                <div className="d-flex justify-content-between gap-10">
                    <div className="special-product-image w-50">
                        <Link to={`/product/${item._id}`}>
                            <img className="img-fluid" src={item.images[0].url} alt="watch" />
                        </Link>
                    </div>
                    <div className="special-product-content w-50">
                        <h5 className="brand">{item.brand.name}</h5>
                        <h6 className="title">{item.name}</h6>
                        <div className="mb-2">
                            <StarRatings
                                rating={item.totalRating}
                                starRatedColor="#ffd700"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="1px"
                                name="rating"
                            />
                        </div>
                        <p className="price">
                            <span className="red-p">
                                {item.price.toLocaleString('vi')}
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
                            <p>
                                {item.quantity} Sản Phẩm - Đã bán: {item.sold}
                            </p>
                            <div className="progress w-75">
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
