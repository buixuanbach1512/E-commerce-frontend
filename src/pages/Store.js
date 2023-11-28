import React, { useEffect, useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../features/product/productSlice';

const Store = () => {
    const [grid, setGrid] = useState(3);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProduct());
    }, [dispatch]);
    const productState = useSelector((state) => state.product.products);
    return (
        <>
            <Meta title={'Cửa Hàng'} />
            <BreadCrumb title="Cửa Hàng" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Mua Hàng Theo Danh Mục</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Thời Trang Nam</li>
                                        <li>Thời Trang Nữ</li>
                                        <li>Thời Trang Trẻ Em</li>
                                        <li>Thời Trang Công Sở</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Lọc Sản Phẩm Theo</h3>
                                <div>
                                    <h5 className="sub-title">Khả Dụng</h5>
                                    <div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                value=""
                                                id="in-stocks"
                                                className="form-check-input"
                                            />
                                            <label htmlFor="in-stocks" className="form-check-label">
                                                Còn hàng(1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                value=""
                                                id="out-stocks"
                                                className="form-check-input"
                                            />
                                            <label htmlFor="out-stocks" className="form-check-label">
                                                Hết hàng(0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Giá Sản Phẩm</h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control py-3"
                                                id="floatingInputFrom"
                                                placeholder="Từ..."
                                            />
                                            <label htmlFor="floatingInputFrom">Từ ...</label>
                                        </div>
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control py-3"
                                                id="floatingInputTo"
                                                placeholder="Đến..."
                                            />
                                            <label htmlFor="floatingInputTo">Đến ...</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Màu Sắc</h5>
                                    <div>
                                        <ul className="colors ps-0">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" value="" id="size-S" className="form-check-input" />
                                            <label htmlFor="size-S" className="form-check-label">
                                                S (2)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" value="" id="size-M" className="form-check-input" />
                                            <label htmlFor="size-M" className="form-check-label">
                                                M (0)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" value="" id="size-L" className="form-check-input" />
                                            <label htmlFor="size-L" className="form-check-label">
                                                L (2)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Tags Sản Phẩm</h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Áo thun nam
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Quần jean
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Thời trang nữ
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Thời trang trẻ em
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Sản Phẩm Ngẫu Nhiên</h3>
                                <div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-35">
                                            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                                        </div>
                                        <div className="w-65">
                                            <h5>Kid headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />

                                            <b>
                                                100.000<sup>đ</sup>
                                            </b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex">
                                        <div className="w-35">
                                            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                                        </div>
                                        <div className="w-65">
                                            <h5>Kid headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>
                                                100.000<sup>đ</sup>
                                            </b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 w-50">Sort by:</p>
                                        <select className="form-control form-select">
                                            <option value="feature">Nổi bật</option>
                                            <option value="bess-selling">Mua nhiều nhất</option>
                                            <option value="A-Z">A-Z</option>
                                            <option value="Z-A">Z-A</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 grid">
                                        <p className="total-products mb-0">25 sản phẩm</p>
                                        <div className="d-flex gap-10 align-items-center">
                                            <img
                                                onClick={() => setGrid(3)}
                                                src="images/gr4.svg"
                                                alt="grid"
                                                className="d-block img-fluid"
                                            />
                                            <img
                                                onClick={() => setGrid(4)}
                                                src="images/gr3.svg"
                                                alt="grid"
                                                className="d-block img-fluid"
                                            />
                                            <img
                                                onClick={() => setGrid(6)}
                                                src="images/gr2.svg"
                                                alt="grid"
                                                className="d-block img-fluid"
                                            />
                                            <img
                                                onClick={() => setGrid(12)}
                                                src="images/gr.svg"
                                                alt="grid"
                                                className="d-block img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-list pb-5">
                                <div className="d-flex flex-wrap">
                                    {productState?.map((item) => (
                                        <ProductCard key={item._id} item={item} grid={grid} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Store;
