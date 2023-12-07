import React, { useEffect, useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../features/product/productSlice';
import Color from '../components/Color';
import { getAllColor } from '../features/color/colorSlice';
import { Link, useSearchParams } from 'react-router-dom';
import Pagination from '../components/Pagination';

const Store = () => {
    const [grid, setGrid] = useState(3);
    const [tags, setTags] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const dispatch = useDispatch();
    const productState = useSelector((state) => state.product.products);
    const categoryState = useSelector((state) => state.category.categories);
    const [searchParams] = useSearchParams();
    const queryData = searchParams.get('category') ? searchParams.get('category') : undefined;
    console.log(categoryState?.category?._id);
    useEffect(() => {
        let newTags = [];
        for (let i = 0; i < productState.length; i++) {
            const element = productState[i];
            newTags.push(element.tags);
        }
        setTags(newTags);
    }, [productState]);

    const colorState = useSelector((state) => state.color.colors);
    useEffect(() => {
        dispatch(getAllProduct(queryData));
        dispatch(getAllColor());
    }, [dispatch, queryData]);

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = productState && productState.slice(firstItemIndex, lastItemIndex);

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
                                        {categoryState?.map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={`/store?category=${item._id}`}
                                                    style={{
                                                        color: item?._id === queryData ? '#febd69' : '#777777',
                                                    }}
                                                >
                                                    {item?.name}
                                                </Link>
                                            </li>
                                        ))}
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
                                        <Color colorData={colorState} />
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
                                        {tags?.map((item, index) => (
                                            <span
                                                key={index}
                                                className="badge bg-light text-secondary rounded-3 py-2 px-3"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="filter-card mb-3">
                                <h3 className="filter-title">Sản Phẩm Ngẫu Nhiên</h3>
                                <div>
                                    {productState &&
                                        productState?.slice(1, productState.length)?.map((item, index) => (
                                            <div className="random-products mb-3 d-flex">
                                                <div className="w-35">
                                                    <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                                                </div>
                                                <div className="w-65">
                                                    <h5>{item?.name}</h5>
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
                                        ))}
                                </div>
                            </div> */}
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
                                        <p className="total-products mb-0">{productState?.length} sản phẩm</p>
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
                                    {currentItems?.map((item) => (
                                        <ProductCard key={item._id} item={item} grid={grid} />
                                    ))}
                                </div>
                                <Pagination
                                    totalItems={productState?.length}
                                    itemsPerPage={itemsPerPage}
                                    setCurrentPage={setCurrentPage}
                                    currentPage={currentPage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Store;
