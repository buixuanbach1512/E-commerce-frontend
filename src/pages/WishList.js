import React from 'react';

import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserWishList } from '../features/auth/authSlice';
import { addToWishList } from '../features/product/productSlice';

const WishList = () => {
    const dispatch = useDispatch();
    const wishListState = useSelector((state) => state?.auth?.wishList?.wishlist);
    useEffect(() => {
        dispatch(getUserWishList());
    }, [dispatch]);
    const removeProdWishList = (id) => {
        dispatch(addToWishList(id));
        setTimeout(() => {
            dispatch(getUserWishList());
        }, 300);
    };
    return (
        <>
            <Meta title={'Wish List'} />
            <BreadCrumb title="Wish List" />
            <div className="widhlist-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">
                        {wishListState?.length === 0 && (
                            <div className="py-5">
                                <h2 className="text-center">Chưa có sản phẩm yêu thích!!</h2>
                            </div>
                        )}
                        {wishListState?.map((item) => (
                            <div key={item._id} className="col-2">
                                <div className="wishlist-card position-relative">
                                    <img
                                        src="images/cross.svg"
                                        alt="cross"
                                        onClick={() => removeProdWishList(item._id)}
                                        className="position-absolute cross img-fluid"
                                    />
                                    <div className="wishlist-card-img">
                                        <img src={item.images[0].url} className="img-fluid w-100" alt="product" />
                                    </div>
                                    <div className="bg-white px-3 py-3">
                                        <h5 className="title">{item.name}</h5>
                                        <h6 className="price">{item.price}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WishList;
