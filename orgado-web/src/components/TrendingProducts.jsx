import React, { useEffect, useState, useRef } from "react";
import trendbnr from "../assets/images/banner-imgs/trendingbnr-1.jpg";
import "../assets/Styles/TrendingProducts.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import bean from "../assets/images/trending-products/trendbeans.jpg";
import chips from "../assets/images/trending-products/trendchips.jpg";
import mug from "../assets/images/trending-products/trendmug.jpg";
import artisan from "../assets/images/trending-products/trendkoffe.jpg";
import sticker from "../assets/images/trending-products/trendsticker.jpg";
import AddToCartButton from './AddToCartButton';
import AddToWishList from "./AddToWishList";

const defaultTrendingProducts = [
  { id: 1, title: "Premium Broad bean", price: "$40.00", imgsrc: bean, qty: 1 },
  { id: 2, title: "Triangular Chips", price: "$9.00", imgsrc: chips, qty: 1 },
  { id: 3, title: "Ceramic Coffee Mug", price: "$12.00", imgsrc: mug, qty: 1 },
  { id: 4, title: "Artisan coffee", price: "$25.00", imgsrc: artisan, qty: 1 },
  { id: 5, title: "Cartoon Sticker", price: "$4.00", imgsrc: sticker, qty: 1 },
];


const TrendingProducts = ({ title, sidebarContent, productList, disableScroll }) => {

  const [activeTab, setActiveTab] = useState("view-all");

  const [items, setItems] = useState(productList || defaultTrendingProducts);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      if (direction === "left") {
        current.scrollBy({ left: -300, behavior: "smooth" });
      } else {
        current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (productList) {
      setItems(productList);
    }
  }, [productList]);

  const handlechange = (id) => () => {
    console.log(id);
    const updateditem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(updateditem);
  };

  const handleDecrease = (id) => () => {
    const updatedItems = items.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setItems(updatedItems);
  };

  return (
    <div>
      <div className="container" style={{ marginTop: "160px" }}>
        <div className="row">


          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
            {sidebarContent ? (
              sidebarContent
            ) : (
              <a href="/">
                <div className="trending-banner position-relative mb-5">
                  <div className="w-img">
                    <img
                      src={trendbnr}
                      alt=""
                      className="rounded-4"
                      style={{ width: "100%", display: "block" }}
                    />
                  </div>

                  <div
                    className="trending-banner-text position-absolute"
                    style={{ top: "30px", left: "30px", zIndex: 2 }}
                  >
                    <h5 style={{ color: "white", fontWeight: "400", marginBottom: "5px" }}>
                      Organic
                    </h5>
                    <h3 style={{ color: "white", fontWeight: "700", fontSize: "32px" }}>
                      Fresh Masala
                    </h3>
                  </div>
                </div>
              </a>
            )}
          </div>

          <div className="col-xxl-9 col-xl-8 col-lg-8">
            <div className="row">
              <div className="col-xxl-4 col-xl-5 col-lg-4">
                <div className="bd-section__title-wrapper">
                  <div className="bd-section__title ">
                    <h1>{title || "You May Missed"}</h1>
                  </div>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-7 col-lg-8">
                <div className="bd-trending__tab-wrapper p-relative  d-flex justify-content-end align-items-center ">
                  <div className="trending-nav">
                    <nav>
                      <div className="nav justify-content-end border-0 me-5">
                        <button
                          className={`nav-link border-0 bg-transparent p-0 me-4 ${activeTab === "view-all"
                            ? "active-tab"
                            : "text-muted"
                            }`}
                          onClick={() => setActiveTab("view-all")}
                          style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            transition: "0.5s",
                          }}
                        >
                          {activeTab === "view-all" && (
                            <span className="click-dot"
                              style={{ color: "#FFB800", marginRight: "5px" }}
                            >
                              •
                            </span>
                          )}
                          View All
                        </button>
                        <button
                          className={`nav-link border-0 bg-transparent p-0 me-4 ${activeTab === "new-arrival"
                            ? "active-tab"
                            : "text-muted"
                            }`}
                          onClick={() => setActiveTab("new-arrival")}
                          style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            transition: "0.3s",
                          }}
                        >
                          {activeTab === "new-arrival" && (
                            <span className="click-dot"
                              style={{ color: "#FFB800", marginRight: "5px" }}
                            >
                              •
                            </span>
                          )}
                          New Arrival
                        </button>
                        <button
                          className={`nav-link border-0 bg-transparent p-0 me-4 ${activeTab === "best-sale"
                            ? "active-tab"
                            : "text-muted"
                            }`}
                          onClick={() => setActiveTab("best-sale")}
                          style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            transition: "0.3s",
                          }}
                        >
                          {activeTab === "best-sale" && (
                            <span className="click-dot"
                              style={{ color: "#FFB800", marginRight: "5px" }}
                            >
                              •
                            </span>
                          )}
                          Best Sale
                        </button>

                        <button
                          className={`nav-link border-0 bg-transparent p-0 ${activeTab === "trending"
                            ? "active-tab"
                            : "text-muted"
                            }`}
                          onClick={() => setActiveTab("trending")}
                          style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            transition: "0.3s",
                          }}
                        >
                          {activeTab === "trending" && (
                            <span className="click-dot"
                              style={{ color: "#FFB800", marginRight: "5px" }}
                            >
                              •
                            </span>
                          )}
                          Trending
                        </button>
                      </div>
                    </nav>
                  </div>
                  <div className="trending-navigation-buttons d-flex gap-2">
                    <button className="trending-btn prev-btn" onClick={() => scroll("left")}>
                      <BsChevronLeft size={15} />
                    </button>

                    <button className="trending-btn next-btn" onClick={() => scroll("right")}>
                      <BsChevronRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-trending-wrappe horizontal-scroll" ref={scrollRef}>
              <div className={`row ${disableScroll ? "" : "flex-nowrap"}`}>
                {items.map((trendProduct) => (
                  <div
                    className="col-lg-4 col-md-6 col-12 card-col"
                    key={trendProduct.id}
                  >
                    <div className="trend-product-card d-flex flex-column align-items-center text-center p-3 mb-4">
                      <a href="/">
                        <div className="new-trend">
                          <p className="">new</p>
                        </div>
                        <img src={trendProduct.imgsrc} alt="product image" />
                        <h4>{trendProduct.title}</h4>
                        <h5>{trendProduct.price}</h5>
                      </a>
                      <span>*****</span>
                      <div className="qty-selector">
                        <button className="qty-btn" onClick={handleDecrease(trendProduct.id)}>
                          <FaMinus size={10} />
                        </button>
                        <span className="qty-input">{trendProduct.qty}</span>
                        <button className="qty-btn" onClick={handlechange(trendProduct.id)}>
                          <FaPlus size={10} />
                        </button>
                      </div>
                      <div className="action-buttons">
                        <AddToCartButton product={trendProduct} className="add-cart-btn" />
                        <AddToWishList product={trendProduct} className="wishlist-btn" />
                      </div>
                    </div>
                  </div>
                ))}
                ;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;