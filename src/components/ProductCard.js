import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addToWishList } from '../features/product/productSlice';
import { IoIosHeartEmpty } from 'react-icons/io';
import { BsEye } from 'react-icons/bs';
import { IoBagOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import StarRatings from 'react-star-ratings';
import parse from 'html-react-parser';

const ProductCard = (props) => {
    const { grid, item } = props;
    let location = useLocation();
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const addToWL = (id) => {
        if (authState.user !== null && authState.isError === false) {
            dispatch(addToWishList(id));
        } else {
            toast.warning('Chưa đăng nhập');
        }
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

                    <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>{parse(item.description)}</p>
                    <p className="price">
                        {item.price.toLocaleString('vi')}
                        <sup>đ</sup>
                    </p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column">
                        <Link className="mb-3" to={`/product/${item._id}`}>
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
