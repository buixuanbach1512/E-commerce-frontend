import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Meta from '../components/Meta';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../features/product/productSlice';
import { getProdCategory } from '../features/category/categorySlice';

const Home = () => {
    const dispatch = useDispatch();
    const productState = useSelector((state) => state.product.products);
    const prodCateState = useSelector((state) => state.category.prodCategories);
    useEffect(() => {
        dispatch(getAllProduct());
        dispatch(getProdCategory());
    }, [dispatch]);
    return (
        <>
            <Meta title={'B-Shop'} />
            <section className="banner-wrapper home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6 main-banner">
                            <div className="position-relative">
                                <img
                                    src="images/main-banner-1.jpg"
                                    className="img-fluid w-100 rounded-3 main-img-banner"
                                    alt="main-banner"
                                />
                                <div className="main-banner-content position-absolute">
                                    <h4>Giảm giá cho sản phẩm</h4>
                                    <h5>Áo Thun </h5>
                                    <p>
                                        Chỉ từ 99.000<sup>đ</sup>/cái | 190.000<sup>đ</sup>/cặp
                                    </p>
                                    <Link className="button">Mua Ngay</Link>
                                </div>
                            </div>
                        </div>
                        <div className="secondary-banner col-6">
                            <div className="d-flex flex-wrap gap-5 justify-content-between align-items-center">
                                <div className="small-banner position-relative">
                                    <img
                                        src="images/catbanner-01.jpg"
                                        className="img-fluid rounded-3"
                                        alt="main-banner"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Giảm giá cho sản phẩm</h4>
                                        <h5>Áo Thun </h5>
                                        <p>
                                            Chỉ từ 99.000<sup>đ</sup>/cái <br /> 190.000<sup>đ</sup>/cặp
                                        </p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img
                                        src="images/catbanner-02.jpg"
                                        className="img-fluid rounded-3"
                                        alt="main-banner"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Hàng Mới Về</h4>
                                        <h5>Quần Jean </h5>
                                        <p>
                                            Chỉ từ 89.000<sup>đ</sup>/cái <br /> 180.000<sup>đ</sup>/cặp
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-5 justify-content-between align-items-center mt-3">
                                <div className="small-banner position-relative">
                                    <img
                                        src="images/catbanner-01.jpg"
                                        className="img-fluid rounded-3"
                                        alt="main-banner"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Giảm giá cho sản phẩm</h4>
                                        <h5>Áo Thun </h5>
                                        <p>
                                            Chỉ từ 99.000<sup>đ</sup>/cái <br /> 190.000<sup>đ</sup>/cặp
                                        </p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img
                                        src="images/catbanner-02.jpg"
                                        className="img-fluid rounded-3"
                                        alt="main-banner"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Hàng Mới Về</h4>
                                        <h5>Quần Jean </h5>
                                        <p>
                                            Chỉ từ 89.000<sup>đ</sup>/cái <br /> 180.000<sup>đ</sup>/cặp
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-10">
                                    <img src="images/service.png" alt="" />
                                    <div>
                                        <h6>Miễn Phí Giao Hàng</h6>
                                        <p className="mb-0">
                                            Đơn hàng từ 100.000<sup>đ</sup>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-02.png" alt="service" />
                                    <div>
                                        <h6>Ưu đãi hàng ngày</h6>
                                        <p className="mb-0">Tiết kiệm tới 25%</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-03.png" alt="service" />
                                    <div>
                                        <h6>Hỗ trợ 24/7</h6>
                                        <p className="mb-0">Mọi lúc, mọi nơi</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-04.png" alt="service" />
                                    <div>
                                        <h6>Giá cả phải chăng</h6>
                                        <p className="mb-0">Giá gốc từ nhà máy</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-05.png" alt="service" />
                                    <div>
                                        <h6>Thanh toán an toàn</h6>
                                        <p className="mb-0">Được bảo vệ 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                                {prodCateState &&
                                    prodCateState?.map((item, index) => (
                                        <div key={index} className="d-flex align-items-center gap-5">
                                            <div>
                                                <h6>{item.name}</h6>
                                                <p>{item.productList.length} sản phẩm</p>
                                            </div>
                                            <img
                                                src={item.productList[0]?.images[0]?.url}
                                                className=" img-fluid"
                                                alt="img"
                                                style={{ width: 70, height: 70 }}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">sản phẩm nổi bật</h3>
                        </div>
                        {productState &&
                            productState
                                ?.slice(0, 12)
                                ?.filter((item) => item.tags === 'Sản phẩm nổi bật')
                                ?.map((item) => <ProductCard key={item._id} item={item} />)}
                    </div>
                </div>
            </section>
            <section className="special-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">sản phẩm đặc biệt</h3>
                        </div>
                    </div>
                    <div className="row">
                        {productState &&
                            productState
                                ?.slice(0, 4)
                                ?.filter((item) => item.tags === 'Sản phẩm đặc biệt')
                                ?.map((item) => <SpecialProduct key={item._id} item={item} />)}
                    </div>
                </div>
            </section>
            <section className="marquee-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className="d-flex">
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-01.png" alt="brand" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-02.png" alt="brand" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-03.png" alt="brand" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-04.png" alt="brand" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-05.png" alt="brand" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-06.png" alt="brand" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-07.png" alt="brand" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-08.png" alt="brand" />
                                    </div>
                                </Marquee>
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

export default Home;
