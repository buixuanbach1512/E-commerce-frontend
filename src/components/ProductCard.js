import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addToWishList } from '../features/product/productSlice';
import { IoIosHeartEmpty } from 'react-icons/io';
import { BsEye } from 'react-icons/bs';
import { IoBagOutline } from 'react-icons/io5';

const ProductCard = (props) => {
    const { grid, item } = props;
    let location = useLocation();
    const dispatch = useDispatch();
    const addToWL = (id) => {
        dispatch(addToWishList(id));
    };
    return (
        <div className={`${location.pathname === '/store' ? `col-${grid}` : 'col-2'}`} style={{ padding: 5 }}>
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <button
                        className="bg-transparent border-0"
                        onClick={() => {
                            addToWL(item._id);
                        }}
                    >
                        <IoIosHeartEmpty className="prod-icon heart-icon" />
                    </button>
                </div>
                <div className="product-image">
                    <Link to={`/product/${item._id}`}>
                        <img className="img-fluid" src={item.images[0].url} alt="productimage" />
                    </Link>
                </div>
                <div className="product-details">
                    <h6 className="brand">{item.brand.name}</h6>
                    <h5 className="product-title">{item.name}</h5>
                    <ReactStars count={5} size={24} value={item.totalRating} edit={false} activeColor="#ffd700" />
                    <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>{item.description}</p>
                    <p className="price">
                        {item.price}
                        <sup>đ</sup>
                    </p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column">
                        <Link className="mb-1" to={`/product/${item._id}`}>
                            <BsEye className="prod-icon eye-icon" />
                        </Link>
                        <Link>
                            <IoBagOutline className="prod-icon bag-icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
