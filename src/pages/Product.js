import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAProduct } from '../features/product/productSlice';

const Product = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const prodId = location.pathname.split('/')[2];
    const [writeReview, setWriteReview] = useState(true);
    const prodState = useSelector((state) => state?.product?.getAProd);
    useEffect(() => {
        dispatch(getAProduct(prodId));
    }, [dispatch, prodId]);
    const props = {
        zoomPosition: 'original',
        img: `${prodState?.images[0]?.url}`,
    };

    return (
        <>
            <Meta title={'Product'} />
            <BreadCrumb title="Product" />
            <div className="product-wrapper py-5 home-wrapper-2">
                <div className="container p-3">
                    <div className="row">
                        <div className="col-6 product-images">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-image d-flex flex-wrap gap-15">
                                {prodState?.images.map((item) => (
                                    <div key={item._id}>
                                        <img className="img-fluid" src={item.url} alt="other-img" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className="title">{prodState?.name}</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">
                                        {prodState?.price}
                                        <sup>đ</sup>
                                    </p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={prodState?.totalRating}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="text-review mb-0">( 2 đánh giá )</p>
                                    </div>
                                    <a className="review-btn" href="#review">
                                        Đánh giá sản phẩm
                                    </a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-label">Thương hiệu :</h3>
                                        <p className=" product-data">{prodState?.brand.name}</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-label">Danh mục :</h3>
                                        <p className=" product-data">{prodState?.category.name}</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-label">Tags :</h3>
                                        <p className=" product-data">{prodState?.tags}</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-label">Kho hàng :</h3>
                                        <p className=" product-data">{prodState?.quantity}</p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column my-2">
                                        <h3 className="product-label">Size :</h3>
                                        <div className="d-flex flex-wrap gap-10">
                                            <span className="badge border fs-6 border-1 bg-white text-dark border-secondary">
                                                S
                                            </span>
                                            <span className="badge border fs-6 border-1 bg-white text-dark border-secondary">
                                                M
                                            </span>
                                            <span className="badge border fs-6 border-1 bg-white text-dark border-secondary">
                                                XL
                                            </span>
                                            <span className="badge border fs-6 border-1 bg-white text-dark border-secondary">
                                                XXL
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column my-2">
                                        <h3 className="product-label">Màu sắc :</h3>
                                        <Color />
                                    </div>
                                    <div className="d-flex gap-15 flex-row align-items-center mt-2 mb-3">
                                        <h3 className="product-label">Số lượng :</h3>
                                        <div>
                                            <input
                                                type="number"
                                                min={1}
                                                max={10}
                                                className="form-control"
                                                style={{ width: 70 }}
                                            />
                                        </div>
                                        <div className="d-flex gap-10 align-items-center">
                                            <button type="submit" className="button border-0">
                                                Thêm vào giỏ hàng
                                            </button>
                                            <button to={'/signup'} className="button border-0">
                                                Mua ngay
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-15 align-items-center ">
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="description-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="mb-3">Mô tả sản phẩm</h3>
                            <div className="bg-white p-3">
                                <p>{prodState?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="review-wrapper home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 id="review" className="mb-3">
                                Đánh giá sản phẩm
                            </h3>
                            <div className="review-content">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">Khách hàng đánh giá</h4>
                                        <div className="d-flex gap-10 align-items-center">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className="mb-0">Dựa trên 2 đánh giá</p>
                                        </div>
                                    </div>
                                    {writeReview && (
                                        <div>
                                            <Link href="# " className="text-decoration-underline">
                                                Viết đánh giá
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <div className="review-form py-4">
                                    <h4>Viết đánh giá của bạn</h4>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                className="w-10 form-control"
                                                cols="30"
                                                rows="4"
                                                placeholder="Nhận xét"
                                            ></textarea>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="submit" className="button border-0">
                                                Đánh Giá
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h5 className="mb-0">Bach</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className="mt-3">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nemo
                                            tempore ratione, incidunt fuga eligendi iure magni vero dolorum vitae
                                            ducimus dicta laborum labore neque veritatis aspernatur natus rerum
                                            voluptatem?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Blogs Mới Nhất</h3>
                        </div>
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Product;
