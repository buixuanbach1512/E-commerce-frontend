import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <div className={`${location.pathname === '/store' ? `col-${grid}` : 'col-2'}`} style={{ padding: 5 }}>
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image">
                    <img className="img-fluid" src="images/watch.jpg" alt="productimage" />
                </div>
                <Link>
                    <div className="product-details">
                        <h6 className="brand">Adidas</h6>
                        <h5 className="product-title">Áo thun nam có cổ màu vàng</h5>
                        <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <p className="price">
                            100.000<sup>đ</sup>
                        </p>
                    </div>
                </Link>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column">
                        <Link className="mb-1">
                            <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                            <img src="images/add-cart.svg" alt="add-cart" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
